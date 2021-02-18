import { defaultConfig } from './config'
import { Pallet, Shades, makePallet } from './pallet'

const assertShadeContrast = (shades: Shades): void => {
  const { darker, dark, base, light, lighter } = shades
  expect(darker.contrast(dark)).toBeGreaterThan(1)
  expect(dark.contrast(base)).toBeGreaterThan(1)
  expect(base.contrast(light)).toBeGreaterThan(1)
  expect(light.contrast(lighter)).toBeGreaterThan(1)
}

describe('makePallet', () => {
  let result: Pallet
  beforeEach(() => {
    result = makePallet(defaultConfig)
  })

  it('should generate the correct shades', () => {
    const t = JSON.stringify(result)
    expect(t).toMatchInlineSnapshot(
      `"{\\"primary\\":{\\"base\\":{\\"model\\":\\"rgb\\",\\"color\\":[255,170,0],\\"valpha\\":1},\\"dark\\":{\\"model\\":\\"hsl\\",\\"color\\":[40,100,40],\\"valpha\\":1},\\"darker\\":{\\"model\\":\\"hsl\\",\\"color\\":[40,100,26.5],\\"valpha\\":1},\\"light\\":{\\"model\\":\\"hsl\\",\\"color\\":[40,100,61],\\"valpha\\":1},\\"lighter\\":{\\"model\\":\\"hsl\\",\\"color\\":[40,100,77.5],\\"valpha\\":1}},\\"secondary\\":{\\"base\\":{\\"model\\":\\"rgb\\",\\"color\\":[26,153,255],\\"valpha\\":1},\\"dark\\":{\\"model\\":\\"hsl\\",\\"color\\":[206.72489082969435,100,44.07843137254902],\\"valpha\\":1},\\"darker\\":{\\"model\\":\\"hsl\\",\\"color\\":[206.72489082969435,100,29.20196078431373],\\"valpha\\":1},\\"light\\":{\\"model\\":\\"hsl\\",\\"color\\":[206.72489082969435,100,67.21960784313725],\\"valpha\\":1},\\"lighter\\":{\\"model\\":\\"hsl\\",\\"color\\":[206.72489082969435,100,85.40196078431373],\\"valpha\\":1}},\\"tertiary\\":{\\"base\\":{\\"model\\":\\"rgb\\",\\"color\\":[0,153,153],\\"valpha\\":1},\\"dark\\":{\\"model\\":\\"hsl\\",\\"color\\":[180,100,24],\\"valpha\\":1},\\"darker\\":{\\"model\\":\\"hsl\\",\\"color\\":[180,100,15.9],\\"valpha\\":1},\\"light\\":{\\"model\\":\\"hsl\\",\\"color\\":[180,100,36.6],\\"valpha\\":1},\\"lighter\\":{\\"model\\":\\"hsl\\",\\"color\\":[180,100,46.5],\\"valpha\\":1}},\\"dark\\":{\\"darker\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,0],\\"valpha\\":1},\\"dark\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,5],\\"valpha\\":1},\\"base\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,10],\\"valpha\\":1},\\"light\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,15],\\"valpha\\":1},\\"lighter\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,20],\\"valpha\\":1}},\\"neutral\\":{\\"base\\":{\\"model\\":\\"rgb\\",\\"color\\":[127,127,127],\\"valpha\\":1},\\"dark\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,39.84313725490196],\\"valpha\\":1},\\"darker\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,26.39607843137255],\\"valpha\\":1},\\"light\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,60.760784313725495],\\"valpha\\":1},\\"lighter\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,77.19607843137256],\\"valpha\\":1}},\\"light\\":{\\"darker\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,88],\\"valpha\\":1},\\"dark\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,91],\\"valpha\\":1},\\"base\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,94],\\"valpha\\":1},\\"light\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,97],\\"valpha\\":1},\\"lighter\\":{\\"model\\":\\"hsl\\",\\"color\\":[0,0,100],\\"valpha\\":1}},\\"success\\":{\\"base\\":{\\"model\\":\\"rgb\\",\\"color\\":[40,167,69],\\"valpha\\":1},\\"dark\\":{\\"model\\":\\"hsl\\",\\"color\\":[133.70078740157481,61.352657004830924,32.470588235294116],\\"valpha\\":1},\\"darker\\":{\\"model\\":\\"hsl\\",\\"color\\":[133.70078740157481,61.352657004830924,21.511764705882353],\\"valpha\\":1},\\"light\\":{\\"model\\":\\"hsl\\",\\"color\\":[133.70078740157481,61.352657004830924,49.51764705882353],\\"valpha\\":1},\\"lighter\\":{\\"model\\":\\"hsl\\",\\"color\\":[133.70078740157481,61.352657004830924,62.91176470588235],\\"valpha\\":1}},\\"info\\":{\\"base\\":{\\"model\\":\\"rgb\\",\\"color\\":[23,162,184],\\"valpha\\":1},\\"dark\\":{\\"model\\":\\"hsl\\",\\"color\\":[188.1987577639752,77.77777777777779,32.470588235294116],\\"valpha\\":1},\\"darker\\":{\\"model\\":\\"hsl\\",\\"color\\":[188.1987577639752,77.77777777777779,21.511764705882353],\\"valpha\\":1},\\"light\\":{\\"model\\":\\"hsl\\",\\"color\\":[188.1987577639752,77.77777777777779,49.51764705882353],\\"valpha\\":1},\\"lighter\\":{\\"model\\":\\"hsl\\",\\"color\\":[188.1987577639752,77.77777777777779,62.91176470588235],\\"valpha\\":1}},\\"warning\\":{\\"base\\":{\\"model\\":\\"rgb\\",\\"color\\":[255,193,7],\\"valpha\\":1},\\"dark\\":{\\"model\\":\\"hsl\\",\\"color\\":[45,100,41.09803921568627],\\"valpha\\":1},\\"darker\\":{\\"model\\":\\"hsl\\",\\"color\\":[45,100,27.227450980392156],\\"valpha\\":1},\\"light\\":{\\"model\\":\\"hsl\\",\\"color\\":[45,100,62.674509803921566],\\"valpha\\":1},\\"lighter\\":{\\"model\\":\\"hsl\\",\\"color\\":[45,100,79.62745098039215],\\"valpha\\":1}},\\"danger\\":{\\"base\\":{\\"model\\":\\"rgb\\",\\"color\\":[220,53,69],\\"valpha\\":1},\\"dark\\":{\\"model\\":\\"hsl\\",\\"color\\":[354.2514970059881,70.46413502109705,42.82352941176471],\\"valpha\\":1},\\"darker\\":{\\"model\\":\\"hsl\\",\\"color\\":[354.2514970059881,70.46413502109705,28.37058823529412],\\"valpha\\":1},\\"light\\":{\\"model\\":\\"hsl\\",\\"color\\":[354.2514970059881,70.46413502109705,65.30588235294118],\\"valpha\\":1},\\"lighter\\":{\\"model\\":\\"hsl\\",\\"color\\":[354.2514970059881,70.46413502109705,82.97058823529412],\\"valpha\\":1}}}"`,
    )
  })

  it('should return distinguishable dark shades', () => {
    assertShadeContrast(result.dark)
  })

  it('should return distinguishable light shades', () => {
    assertShadeContrast(result.light)
  })
})
