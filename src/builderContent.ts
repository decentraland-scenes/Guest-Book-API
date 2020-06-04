import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from '../1ab788bf-107d-4b91-881e-48dfb1d46284/src/item'
import Script2 from '../3f3fe65b-c648-44bc-8781-c2a40bc95bb4/src/item'
import Script3 from '../1a7b94e0-ac62-4539-bb08-65f4fc4d66ac/src/item'
import Script4 from '../1dc0345a-f5dd-43b6-bf14-30e7752101b4/src/item'
import Script5 from '../6f54ea17-43bc-4b1e-a8c1-c9b24ff6e038/src/item'

export function buildBuilderScene() {
  const _scene = new Entity('_scene')
  engine.addEntity(_scene)
  const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  _scene.addComponentOrReplace(transform)

  const entity = new Entity('entity')
  engine.addEntity(entity)
  entity.setParent(_scene)
  const gltfShape = new GLTFShape(
    'models/FloorBaseGrass_01/FloorBaseGrass_01.glb'
  )
  gltfShape.withCollisions = true
  gltfShape.isPointerBlocker = true
  gltfShape.visible = true
  entity.addComponentOrReplace(gltfShape)
  const transform2 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  entity.addComponentOrReplace(transform2)

  const narrowCrater = new Entity('narrowCrater')
  engine.addEntity(narrowCrater)
  narrowCrater.setParent(_scene)
  const transform3 = new Transform({
    position: new Vector3(10.355362892150879, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  narrowCrater.addComponentOrReplace(transform3)
  const gltfShape2 = new GLTFShape('models/Crater_02/Crater_02.glb')
  gltfShape2.withCollisions = true
  gltfShape2.isPointerBlocker = true
  gltfShape2.visible = true
  narrowCrater.addComponentOrReplace(gltfShape2)

  const signpost = new Entity('signpost')
  engine.addEntity(signpost)
  signpost.setParent(_scene)
  const transform4 = new Transform({
    position: new Vector3(11, 0, 11),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  signpost.addComponentOrReplace(transform4)

  const signpostRoot = new Entity('signpostRoot')
  engine.addEntity(signpostRoot)
  signpostRoot.setParent(_scene)
  const transform5 = new Transform({
    position: new Vector3(10.355362892150879, 0, 5),
    rotation: new Quaternion(
      -6.65064594497863e-16,
      -0.4713967442512512,
      5.6194867426029305e-8,
      0.8819212913513184
    ),
    scale: new Vector3(1, 1, 1),
  })
  signpostRoot.addComponentOrReplace(transform5)

  const signpostWood = new Entity('signpostWood')
  engine.addEntity(signpostWood)
  signpostWood.setParent(_scene)
  const transform6 = new Transform({
    position: new Vector3(10.855362892150879, 0, 9.5),
    rotation: new Quaternion(
      -1.5513695361373393e-15,
      -0.7997391223907471,
      9.53363255007389e-8,
      0.600347638130188
    ),
    scale: new Vector3(0.9999958276748657, 1, 0.9999958276748657),
  })
  signpostWood.addComponentOrReplace(transform6)

  const signpostRoot2 = new Entity('signpostRoot2')
  engine.addEntity(signpostRoot2)
  signpostRoot2.setParent(_scene)
  const transform7 = new Transform({
    position: new Vector3(12.355362892150879, 0, 6),
    rotation: new Quaternion(
      -1.10062582369541e-15,
      -0.6343932747840881,
      7.562556447737734e-8,
      0.7730104327201843
    ),
    scale: new Vector3(
      1.4099667072296143,
      1.409968376159668,
      1.4099667072296143
    ),
  })
  signpostRoot2.addComponentOrReplace(transform7)

  const ancientMediumStonePath = new Entity('ancientMediumStonePath')
  engine.addEntity(ancientMediumStonePath)
  ancientMediumStonePath.setParent(_scene)
  const transform8 = new Transform({
    position: new Vector3(7.01444149017334, 0, 9.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  ancientMediumStonePath.addComponentOrReplace(transform8)
  const gltfShape3 = new GLTFShape(
    'models/RockFloor_Module_2M/RockFloor_Module_2M.glb'
  )
  gltfShape3.withCollisions = true
  gltfShape3.isPointerBlocker = true
  gltfShape3.visible = true
  ancientMediumStonePath.addComponentOrReplace(gltfShape3)

  const ancientMediumStonePath2 = new Entity('ancientMediumStonePath2')
  engine.addEntity(ancientMediumStonePath2)
  ancientMediumStonePath2.setParent(_scene)
  ancientMediumStonePath2.addComponentOrReplace(gltfShape3)
  const transform9 = new Transform({
    position: new Vector3(5.01444149017334, 0, 9.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  ancientMediumStonePath2.addComponentOrReplace(transform9)

  const ancientMediumStonePath3 = new Entity('ancientMediumStonePath3')
  engine.addEntity(ancientMediumStonePath3)
  ancientMediumStonePath3.setParent(_scene)
  ancientMediumStonePath3.addComponentOrReplace(gltfShape3)
  const transform10 = new Transform({
    position: new Vector3(5.01444149017334, 0, 11.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  ancientMediumStonePath3.addComponentOrReplace(transform10)

  const ancientMediumStonePath4 = new Entity('ancientMediumStonePath4')
  engine.addEntity(ancientMediumStonePath4)
  ancientMediumStonePath4.setParent(_scene)
  ancientMediumStonePath4.addComponentOrReplace(gltfShape3)
  const transform11 = new Transform({
    position: new Vector3(5.01444149017334, 0, 13.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  ancientMediumStonePath4.addComponentOrReplace(transform11)

  const ancientMediumStonePath5 = new Entity('ancientMediumStonePath5')
  engine.addEntity(ancientMediumStonePath5)
  ancientMediumStonePath5.setParent(_scene)
  ancientMediumStonePath5.addComponentOrReplace(gltfShape3)
  const transform12 = new Transform({
    position: new Vector3(5.01444149017334, 0, 15.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  ancientMediumStonePath5.addComponentOrReplace(transform12)

  const bush = new Entity('bush')
  engine.addEntity(bush)
  bush.setParent(_scene)
  const transform13 = new Transform({
    position: new Vector3(12.5, 0, 13.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  bush.addComponentOrReplace(transform13)
  const gltfShape4 = new GLTFShape('models/Bush_02/Bush_02.glb')
  gltfShape4.withCollisions = true
  gltfShape4.isPointerBlocker = true
  gltfShape4.visible = true
  bush.addComponentOrReplace(gltfShape4)

  const evergreenShrub = new Entity('evergreenShrub')
  engine.addEntity(evergreenShrub)
  evergreenShrub.setParent(_scene)
  const transform14 = new Transform({
    position: new Vector3(4.5, 0, 1.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  evergreenShrub.addComponentOrReplace(transform14)
  const gltfShape5 = new GLTFShape('models/Bush_03/Bush_03.glb')
  gltfShape5.withCollisions = true
  gltfShape5.isPointerBlocker = true
  gltfShape5.visible = true
  evergreenShrub.addComponentOrReplace(gltfShape5)

  const sunflowerHead = new Entity('sunflowerHead')
  engine.addEntity(sunflowerHead)
  sunflowerHead.setParent(_scene)
  const transform15 = new Transform({
    position: new Vector3(6.5, 0, 15),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  sunflowerHead.addComponentOrReplace(transform15)
  const gltfShape6 = new GLTFShape('models/Flower_01/Flower_01.glb')
  gltfShape6.withCollisions = true
  gltfShape6.isPointerBlocker = true
  gltfShape6.visible = true
  sunflowerHead.addComponentOrReplace(gltfShape6)

  const greenPoplars = new Entity('greenPoplars')
  engine.addEntity(greenPoplars)
  greenPoplars.setParent(_scene)
  const transform16 = new Transform({
    position: new Vector3(13.5, 0, 2),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  greenPoplars.addComponentOrReplace(transform16)
  const gltfShape7 = new GLTFShape('models/TreeFir_02/TreeFir_02.glb')
  gltfShape7.withCollisions = true
  gltfShape7.isPointerBlocker = true
  gltfShape7.visible = true
  greenPoplars.addComponentOrReplace(gltfShape7)

  const rusticMerchantFishStand = new Entity('rusticMerchantFishStand')
  engine.addEntity(rusticMerchantFishStand)
  rusticMerchantFishStand.setParent(_scene)
  const transform17 = new Transform({
    position: new Vector3(6.51444149017334, 0, 13),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    ),
    scale: new Vector3(1.0000107288360596, 1, 1.0000107288360596),
  })
  rusticMerchantFishStand.addComponentOrReplace(transform17)
  const gltfShape8 = new GLTFShape('models/SellingGoods_02/SellingGoods_02.glb')
  gltfShape8.withCollisions = true
  gltfShape8.isPointerBlocker = true
  gltfShape8.visible = true
  rusticMerchantFishStand.addComponentOrReplace(gltfShape8)

  const rusticCoveredMerchantStand = new Entity('rusticCoveredMerchantStand')
  engine.addEntity(rusticCoveredMerchantStand)
  rusticCoveredMerchantStand.setParent(_scene)
  const transform18 = new Transform({
    position: new Vector3(6.51444149017334, 0, 11),
    rotation: new Quaternion(
      -1.5394153601527394e-15,
      -0.7071068286895752,
      8.429369557916289e-8,
      0.7071068286895752
    ),
    scale: new Vector3(1.0000088214874268, 1, 1.0000088214874268),
  })
  rusticCoveredMerchantStand.addComponentOrReplace(transform18)
  const gltfShape9 = new GLTFShape('models/SellingGoods_03/SellingGoods_03.glb')
  gltfShape9.withCollisions = true
  gltfShape9.isPointerBlocker = true
  gltfShape9.visible = true
  rusticCoveredMerchantStand.addComponentOrReplace(gltfShape9)

  const rusticMerchantFishStand2 = new Entity('rusticMerchantFishStand2')
  engine.addEntity(rusticMerchantFishStand2)
  rusticMerchantFishStand2.setParent(_scene)
  const transform19 = new Transform({
    position: new Vector3(2.2349023818969727, 0, 6),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  rusticMerchantFishStand2.addComponentOrReplace(transform19)
  rusticMerchantFishStand2.addComponentOrReplace(gltfShape8)

  const rusticCoveredMerchantStand2 = new Entity('rusticCoveredMerchantStand2')
  engine.addEntity(rusticCoveredMerchantStand2)
  rusticCoveredMerchantStand2.setParent(_scene)
  const transform20 = new Transform({
    position: new Vector3(5.234902381896973, 0, 6),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  })
  rusticCoveredMerchantStand2.addComponentOrReplace(transform20)
  rusticCoveredMerchantStand2.addComponentOrReplace(gltfShape9)

  const signpost2 = new Entity('signpost2')
  engine.addEntity(signpost2)
  signpost2.setParent(_scene)
  const transform21 = new Transform({
    position: new Vector3(6.01444149017334, 0, 15),
    rotation: new Quaternion(
      -1.7015905116955343e-15,
      0,
      -6.982296401520131e-16,
      1
    ),
    scale: new Vector3(0.9999994039535522, 1, 0.9999994039535522),
  })
  signpost2.addComponentOrReplace(transform21)

  const rusticMerchantStand = new Entity('rusticMerchantStand')
  engine.addEntity(rusticMerchantStand)
  rusticMerchantStand.setParent(_scene)
  const transform22 = new Transform({
    position: new Vector3(1.7751564979553223, 0, 9.83009147644043),
    rotation: new Quaternion(
      1.1038385137852273e-15,
      0.7071068286895752,
      -8.429368847373553e-8,
      0.7071067690849304
    ),
    scale: new Vector3(1, 1, 1),
  })
  rusticMerchantStand.addComponentOrReplace(transform22)
  const gltfShape10 = new GLTFShape(
    'models/SellingGoods_01/SellingGoods_01.glb'
  )
  gltfShape10.withCollisions = true
  gltfShape10.isPointerBlocker = true
  gltfShape10.visible = true
  rusticMerchantStand.addComponentOrReplace(gltfShape10)

  const rusticCoveredMerchantStand3 = new Entity('rusticCoveredMerchantStand3')
  engine.addEntity(rusticCoveredMerchantStand3)
  rusticCoveredMerchantStand3.setParent(_scene)
  rusticCoveredMerchantStand3.addComponentOrReplace(gltfShape9)
  const transform23 = new Transform({
    position: new Vector3(2, 0, 12.5),
    rotation: new Quaternion(
      -1.1023608648087421e-15,
      0.7806753516197205,
      -9.306374693096586e-8,
      0.6249369382858276
    ),
    scale: new Vector3(1.0000100135803223, 1, 1.0000100135803223),
  })
  rusticCoveredMerchantStand3.addComponentOrReplace(transform23)

  const cafeStreetSign = new Entity('cafeStreetSign')
  engine.addEntity(cafeStreetSign)
  cafeStreetSign.setParent(_scene)
  const transform24 = new Transform({
    position: new Vector3(10, 0, 3.5),
    rotation: new Quaternion(
      -1.050000167921502e-14,
      -0.3896034359931946,
      4.644433104772361e-8,
      -0.9209827780723572
    ),
    scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687),
  })
  cafeStreetSign.addComponentOrReplace(transform24)
  const gltfShape11 = new GLTFShape('models/Sign_02/Sign_02.glb')
  gltfShape11.withCollisions = true
  gltfShape11.isPointerBlocker = true
  gltfShape11.visible = true
  cafeStreetSign.addComponentOrReplace(gltfShape11)

  const signpostGolden = new Entity('signpostGolden')
  engine.addEntity(signpostGolden)
  signpostGolden.setParent(_scene)
  const transform25 = new Transform({
    position: new Vector3(13, 0, 10.5),
    rotation: new Quaternion(
      3.2226755494740985e-15,
      -0.8135725855827332,
      9.698539571445508e-8,
      0.5814635157585144
    ),
    scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164),
  })
  signpostGolden.addComponentOrReplace(transform25)

  const roundSignpost = new Entity('roundSignpost')
  engine.addEntity(roundSignpost)
  roundSignpost.setParent(_scene)
  const transform26 = new Transform({
    position: new Vector3(4, 0, 3.5),
    rotation: new Quaternion(
      5.415829561889168e-15,
      0.9999245405197144,
      -1.1920029407974653e-7,
      0.012292832136154175
    ),
    scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746),
  })
  roundSignpost.addComponentOrReplace(transform26)

  const redBicycle = new Entity('redBicycle')
  engine.addEntity(redBicycle)
  redBicycle.setParent(_scene)
  const transform27 = new Transform({
    position: new Vector3(2.5, 0, 3.5),
    rotation: new Quaternion(
      -0.47008490562438965,
      3.1905565895098075e-16,
      5.6038484075315864e-8,
      0.8826212882995605
    ),
    scale: new Vector3(1, 1.0000017881393433, 1.0000017881393433),
  })
  redBicycle.addComponentOrReplace(transform27)
  const gltfShape12 = new GLTFShape('models/Bicycle_01/Bicycle_01.glb')
  gltfShape12.withCollisions = true
  gltfShape12.isPointerBlocker = true
  gltfShape12.visible = true
  redBicycle.addComponentOrReplace(gltfShape12)

  const channelId = Math.random().toString(16).slice(2)
  const channelBus = new MessageBus()

  const script1 = new Script1()
  const script2 = new Script2()
  const script3 = new Script3()
  const script4 = new Script4()
  const script5 = new Script5()
  script1.init()
  script2.init()
  script3.init()
  script4.init()
  script5.init()
  script1.spawn(
    signpost,
    { text: 'The amazing crater', fontSize: 20 },
    createChannel(channelId, signpost, channelBus)
  )
  script2.spawn(
    signpostRoot,
    {
      text: "Isn't nature incredible?\nJust look at that!\nJust Wow!",
      fontSize: 20,
    },
    createChannel(channelId, signpostRoot, channelBus)
  )
  script3.spawn(
    signpostWood,
    { text: 'Pictures of crater \n50 USD\n', fontSize: 20 },
    createChannel(channelId, signpostWood, channelBus)
  )
  script2.spawn(
    signpostRoot2,
    {
      text: 'Take a selfie,\nShare it with your friends\nTell them to come',
      fontSize: 20,
    },
    createChannel(channelId, signpostRoot2, channelBus)
  )
  script1.spawn(
    signpost2,
    { text: 'The amazing crater', fontSize: 20 },
    createChannel(channelId, signpost2, channelBus)
  )
  script4.spawn(
    signpostGolden,
    { text: 'Guided tours of the crater\nAsk in vistor center', fontSize: 20 },
    createChannel(channelId, signpostGolden, channelBus)
  )
  script5.spawn(
    roundSignpost,
    { text: 'Park your \nbike here\n15 USD', fontSize: 20 },
    createChannel(channelId, roundSignpost, channelBus)
  )
}
