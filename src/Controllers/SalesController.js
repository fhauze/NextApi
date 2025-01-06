import { Op, Sequelize } from 'sequelize';
import { models } from './../Models/Index.js'; // Pastikan untuk menyesuaikan jalur impor

// Fungsi untuk menghitung penjualan produk per bulan
export const getSalesPerMonth = async (req, res) => {
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
