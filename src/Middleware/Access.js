
// Middleware untuk log request
export const RequestLog = (req, res, next) => {
    console.log(`Request - ${req.method} ${req.originalUrl}`);
    next();
};

// Middleware untuk log response
export const RespondLog = (req, res, next) => {
    // Menyimpan fungsi asli res.send
    const originalSend = res.send;

    // Mengganti res.send agar bisa mencetak body sebelum mengirimkannya
    res.send = function(body) {
        console.log(`Respond made from ${process.env.APP_HOST}:${process.env.PORT}`);
        // console.log(`Sending Request - ${body}`);
        // Memanggil fungsi asli res.send dengan body yang sama
        originalSend.call(this, body);
    };

    // Periksa juga res.json dan res.end untuk jenis respons lain
    const originalJson = res.json;
    res.json = function(body) {
        console.log(`Processing Respond from ${process.env.APP_HOST}:${process.env.PORT}`);
        originalJson.call(this, body);
    };

    const originalEnd = res.end;
    res.end = function(body) {
        if (body) {
            console.log(`Respond Served`);
        }
        originalEnd.call(this, body);
    };

    next();
};
