import { Op, Sequelize } from 'sequelize';
import { models, sequelize } from './../Models/Index.js';

// Fungsi untuk menghitung penjualan produk per bulan
export const getSalesPerMonth = async function (req, res) {
  try {
    const { year, month } = req.params;
    const sales = await models.Transaction.findAll({
      attributes: [
        'product_id',
        [Sequelize.fn('SUM', Sequelize.col('quantity')), 'total_sales'],
      ],
      where: {
        transaction_type: 'OUT',
        created_at: {
          [Op.gte]: new Date(year, month - 1, 1),
          [Op.lt]: new Date(year, month, 1),
        },
      },
      group: ['product_id', 'Product.id'],
      include: [
        {
          model: models.Product,
          attributes: ['name'],
        }
      ],
      order: [[Sequelize.col('total_sales'), 'DESC']],
    });
    
    return res.status(200).json({
      success: true,
      data: sales,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Error fetching sales data',
    });
  }
};

/**
 * @lock
 * lock setiap transaksi ke cart
 */
export const addCart = async function (req, res) {
  const {warehouseId,userId, productId, quantity} = req.body;
  const trans = sequelize.transaction();

  try {
    // lock inventory
    const inventory = await models.Inventory.findOne({
      where:{'product_id':productId,'warehouse_id':warehouseId},
      lock: trans.lock.update,
      transaction: trans
    });

    if (!inventory) {
      throw new Error('Product not found');
    }

    if (inventory.quantity < quantity) {
      throw new Error('Insufficient stock');
    }

    inventory.quantity -= quantity;
    await inventory.save({ transaction: t });
    
    // simpan ke tabel cart
    await Cart.create(
      { user_id: userId, inventory_id: inventoryId, quantity },
      { transaction: t }
    );

    await t.commit();

    res.status(200).json({ message: 'Transaction completed successfully' });
  } catch (error) {
    await t.rollback();
    res.status(400).json({ error: error.message });
  }

};
