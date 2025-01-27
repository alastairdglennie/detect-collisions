const Body = require('./Body')

/**
 * A circle used to detect collisions
 * @class
 */
class Circle extends Body {
  /**
   * @constructor
   * @param {Number} [id] The body ID
   * @param {Number} [x = 0] The starting X coordinate
   * @param {Number} [y = 0] The starting Y coordinate
   * @param {Number} [radius = 0] The radius
   * @param {Number} [scale = 1] The scale
   * @param {Number} [padding = 0] The amount to pad the bounding volume when testing for potential collisions
   */
  constructor (id, x = 0, y = 0, radius = 0, scale = 1, padding = 0) {
    super(id, x, y, padding)

    /**
     * @type {Number}
     */
    this.radius = radius

    /**
     * @type {Number}
     */
    this.scale = scale
  }

  /**
   * Draws the circle to a CanvasRenderingContext2D's current path
   * @param {CanvasRenderingContext2D} context The context to add the arc to
   */
  draw (context) {
    const x = this.x
    const y = this.y
    const radius = this.radius * this.scale

    context.moveTo(x + radius, y)
    context.arc(x, y, radius, 0, Math.PI * 2)
  }
};

module.exports = Circle

module.exports.default = module.exports
