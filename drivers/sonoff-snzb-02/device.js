'use strict'

const Sensor = require('../Sensor')

class SonoffSnzb02 extends Sensor {

	onInit() {
		super.onInit()

		this.log(this.getName(), 'has been initiated')
	}

}

module.exports = SonoffSnzb02