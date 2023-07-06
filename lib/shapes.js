// exporting shape, traingle, circle and square

class shape {
  constructor(color) {
    this.color = color;
  }
}

class triangle extends shape {
  constructor(color) {
    super(color);
  }
  render() {
    return '`<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.color}"/>`';
  }
}

class circle extends shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
  }
}

class square extends shape {
  constructor(color) {
    super(color);
  }
  render() {
    return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`;
  }
}

module.exports = { triangle, circle, square, shape };
