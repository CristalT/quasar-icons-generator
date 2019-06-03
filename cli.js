#!/usr/bin/env node
const fs = require('fs')
const sharp = require('sharp')

const [, , ...args] = process.argv

const file = args[0]
const target = args[1]

if(file) {
    if (!fs.existsSync(file)) {
        console.log(`${file} file not found!`)
        return null
    }
} else {
    console.log(`Please specify a valid file!`)
    return null
}



if (!fs.existsSync('output')) fs.mkdirSync('output')

function sizeControl(file) {
    return sharp(file)
        .metadata()
        .then(function(info) {
            if (parseInt(info.height) < 1024 || parseInt(info.width) < 1024) {
                console.error(`${file} dimensions are wrong. Please select a file at less 1024x1024px`)
                return false
            } else {
                return true
            }
        })
}


async function generate(target) {
    if (target === 'pwa') {
        console.log('Generating icons for ' + target + ' ...')

        const control = await sizeControl(file)
        if (!control) return null
    
        if (!fs.existsSync('output/quasar')) fs.mkdirSync('output/quasar')
    
        sharp(file)
            .resize(16, 16)
            .toFile('output/quasar/favicon-16x16.png')
        sharp(file)
            .resize(32, 32)
            .toFile('output/quasar/favicon-32x32.png')
        sharp(file)
            .resize(96, 96)
            .toFile('output/quasar/favicon-96x96.png')
        sharp(file)
            .resize(128, 128)
            .toFile('output/quasar/icon-128x128.png')
        sharp(file)
            .resize(120, 120)
            .toFile('output/quasar/apple-icon-120x120.png')
        sharp(file)
            .resize(152, 152)
            .toFile('output/quasar/apple-icon-152x152.png')
        sharp(file)
            .resize(167, 167)
            .toFile('output/quasar/apple-icon-167x167.png')
        sharp(file)
            .resize(180, 180)
            .toFile('output/quasar/apple-icon-180x180.png')
        sharp(file)
            .resize(192, 192)
            .toFile('output/quasar/icon-192x192.png')
        sharp(file)
            .resize(256, 256)
            .toFile('output/quasar/icon-256x256.png')
        sharp(file)
            .resize(384, 384)
            .toFile('output/quasar/icon-384x384.png')
        sharp(file)
            .resize(512, 512)
            .toFile('output/quasar/icon-512x512.png')
        sharp(file)
            .resize(144, 144)
            .toFile('output/quasar/ms-icon-144x144.png')

        console.log(`All pwa icons generated!`)

    } else if(target === 'cordova') {
        console.log('Generating icons for ' + target + ' ...')

        const control = await sizeControl(file)
        if (!control) return null
    
        if (!fs.existsSync('output/cordova')) fs.mkdirSync('output/cordova')
    
        // icons for android
        if (!fs.existsSync('output/cordova/android')) fs.mkdirSync('output/cordova/android')
        sharp(file)
            .resize(36, 36)
            .toFile('output/cordova/android/icon-36-ldpi.png')
        sharp(file)
            .resize(48, 48)
            .toFile('output/cordova/android/icon-48-mdpi.png')
        sharp(file)
            .resize(72, 72)
            .toFile('output/cordova/android/icon-72-hdpi.png')
        sharp(file)
            .resize(96, 96)
            .toFile('output/cordova/android/icon-96-xhdpi.png')
        sharp(file)
            .resize(144, 144)
            .toFile('output/cordova/android/icon-96-xxhdpi.png')
        sharp(file)
            .resize(192, 192)
            .toFile('output/cordova/android/icon-96-xxxhdpi.png')
    
        // icons for bada
        if (!fs.existsSync('output/cordova/bada')) fs.mkdirSync('output/cordova/bada')
        sharp(file)
            .resize(128, 128)
            .toFile('output/cordova/bada/icon-128.png')
    
        // icons for bada-wac
        if (!fs.existsSync('output/cordova/bada-wac')) fs.mkdirSync('output/cordova/bada-wac')
        sharp(file)
            .resize(48, 48)
            .toFile('output/cordova/bada-wac/icon-48-type5.png')
        sharp(file)
            .resize(50, 50)
            .toFile('output/cordova/bada-wac/icon-50-type3.png')
        sharp(file)
            .resize(80, 80)
            .toFile('output/cordova/bada-wac/icon-80-type4.png')
    
        // icons for blackberry
        if (!fs.existsSync('output/cordova/blackberry')) fs.mkdirSync('output/cordova/blackberry')
        sharp(file)
            .resize(80, 80)
            .toFile('output/cordova/blackberry/icon-80.png')
    
        // icons for blackberry 10
        if (!fs.existsSync('output/cordova/blackberry10')) fs.mkdirSync('output/cordova/blackberry10')
        sharp(file)
            .resize(80, 80)
            .toFile('output/cordova/blackberry10/icon-80.png')
    
        // icons for ios
        if (!fs.existsSync('output/cordova/ios')) fs.mkdirSync('output/cordova/ios')
        sharp(file)
            .resize(57, 57)
            .toFile('output/cordova/ios/icon-57.png')
        sharp(file)
            .resize(114, 114)
            .toFile('output/cordova/ios/icon-57-2x.png')
        sharp(file)
            .resize(72, 72)
            .toFile('output/cordova/ios/icon-72.png')
        sharp(file)
            .resize(144, 144)
            .toFile('output/cordova/ios/icon-72-2x.png')
    
        // icons for tizen
        if (!fs.existsSync('output/cordova/tizen')) fs.mkdirSync('output/cordova/tizen')
        sharp(file)
            .resize(128, 128)
            .toFile('output/cordova/tizen/icon-128.png')
    
        // icons for webos
        if (!fs.existsSync('output/cordova/webos')) fs.mkdirSync('output/cordova/webos')
        sharp(file)
            .resize(64, 64)
            .toFile('output/cordova/webos/icon-64.png')
    
        // icons for windows phone
        if (!fs.existsSync('output/cordova/windows-phone')) fs.mkdirSync('output/cordova/windows-phone')
        sharp(file)
            .resize(48, 48)
            .toFile('output/cordova/windows-phone/icon-48.png')
        sharp(file)
            .resize(62, 62)
            .toFile('output/cordova/windows-phone/icon-62-tile.png')
        sharp(file)
            .resize(173, 173)
            .toFile('output/cordova/windows-phone/icon-173-tile.png')
    
        console.log('All cordova icons generated!')
    } else {
        console.log(`Error: please specify 'quasar' or 'cordova' target`)
    }
    
}

generate(target)


