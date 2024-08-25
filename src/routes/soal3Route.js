const express = require('express');
const router = express.Router();
const {
    convertDecimalToBinary,
    convertBinaryToDecimal,
    convertDecimalToOctal,
    convertOctalToDecimal,
    convertDecimalToHexadecimal,
    convertHexadecimalToDecimal,
    convertBinaryToOctal,
    convertOctalToBinary,
    convertHexadecimalToOctal,
    convertOctalToHexadecimal
} = require('../controllers/soal3Controller');

// Define routes
router.post('/decimal-to-binary', convertDecimalToBinary);
router.post('/binary-to-decimal', convertBinaryToDecimal);
router.post('/decimal-to-octal', convertDecimalToOctal);
router.post('/octal-to-decimal', convertOctalToDecimal);
router.post('/decimal-to-hexadecimal', convertDecimalToHexadecimal);
router.post('/hexadecimal-to-decimal', convertHexadecimalToDecimal);
router.post('/binary-to-octal', convertBinaryToOctal);
router.post('/octal-to-binary', convertOctalToBinary);
router.post('/hexadecimal-to-octal', convertHexadecimalToOctal);
router.post('/octal-to-hexadecimal', convertOctalToHexadecimal);

module.exports = router;