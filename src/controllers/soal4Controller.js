exports.rumusBMI = (req, res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat)
    let BMI = berat / Math.pow(tinggi / 100, 2)

    let status;

    if (BMI < 18.5) {
        status = "Kekurangan Berat Badan";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        status = "Normal (Ideal)";
    } else if (BMI >= 25 && BMI <= 29.9) {
        status = "Kelebihan Berat Badan";
    } else {
        status = "Kelebihan Berat Badan(Obesitas)";
    }

    let response = {
        tinggi: tinggi,
        berat: berat,
        BMI: BMI.toFixed(2), 
        status: status
    };

    return res.json(response);
}