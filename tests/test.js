const chai = require('chai');
const expect = chai.expect;

const Matrix = require('../src/Matrix');

describe('Matrix', () => {
  it('should create a matrix with the specified dimensions', () => {
    const matrix = new Matrix(2, 3);
    expect(matrix.rows).to.be.equal(2);
    expect(matrix.cols).to.be.equal(3);
  });

  it('should create a matrix with all zeros', () => {
    const matrix = new Matrix(2, 3);
    const expectedData = [
      [0, 0, 0],
      [0, 0, 0]
    ];
    expect(matrix.data).to.be.deep.equal(expectedData);
  });

  it('should create an identity matrix', () => {
    const identityMatrix = Matrix.identity(3);
    const expectedData = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ];
    expect(identityMatrix.data).to.be.deep.equal(expectedData);
  });

  it('should add a scalar to the matrix', () => {
    const matrix = new Matrix(2, 3);
    matrix.add(2);
    const expectedData = [
      [2, 2, 2],
      [2, 2, 2]
    ];
    expect(matrix.data).to.be.deep.equal(expectedData);
  });

  it('should add matrices element-wise', () => {
    const matrix1 = new Matrix(2, 2);
    const matrix2 = new Matrix(2, 2);
    matrix1.data = [[1, 2], [3, 4]];
    matrix2.data = [[5, 6], [7, 8]];
    matrix1.add(matrix2);
    const expectedData = [
      [6, 8],
      [10, 12]
    ];
    expect(matrix1.data).to.be.deep.equal(expectedData);
  });
});
