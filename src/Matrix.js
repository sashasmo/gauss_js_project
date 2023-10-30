class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.data = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
  }

  static identity(size) {
    const matrix = new Matrix(size, size);
    for (let i = 0; i < size; i++) {
      matrix.data[i][i] = 1;
    }
    return matrix;
  }

  add(n) {
    if (n instanceof Matrix) {
      if (this.rows === n.rows && this.cols === n.cols) {
        for (let i = 0; i < this.rows; i++) {
          for (let j = 0; j < this.cols; j++) {
            this.data[i][j] += n.data[i][j];
          }
        }
      } else {
        throw new Error('Matrices must have the same dimensions for addition.');
      }
    } else {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          this.data[i][j] += n;
        }
      }
    }
  }

}

// Mock методи (згідно завдання)
Matrix.mockMethod1 = function() {
};

Matrix.mockMethod2 = function() {
};

module.exports = Matrix;
