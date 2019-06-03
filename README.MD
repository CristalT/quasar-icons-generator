# Getting Started
## Installation
1. Clone or download repository:
- `$ git clone https://github.com/CristalT/quasar-icons-generator.git gicons`
2. `$ cd gicons` to open folder
3. Run `npm install`
4. Run `npm link`

## Preparation
- Choose a 1024x1024px PNG file and save it into repository folder.

## Command
`gicons [filename] [target-platform]`

Where:

- filename: PNG file of at least 1024x1024px
- target-platform: `cordova` or `pwa`

Files will be saved into `output` folder

### Example
`gicons sitapp.png cordova`

Created with [**SHARP**](https://www.npmjs.com/package/sharp)

