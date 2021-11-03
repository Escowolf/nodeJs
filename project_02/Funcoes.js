function areaTriangulo(b, h) {
    return (b+h/2);
}

function areaQuadrado(b, h) {
    return b * h;
}
areaQuadrado(2,2);

module.exports = {
    areaTriangulo,
    areaQuadrado,
};