import { buildBuilderScene } from './builderScene'
import { openUI } from './ui'

buildBuilderScene()

let guestBook = new Entity()
guestBook.addComponent(
  new Transform({
    position: new Vector3(8, 0, 4),
    rotation: Quaternion.Euler(0, 60, 0),
  })
)
guestBook.addComponent(new GLTFShape('models/guestbook.glb'))
guestBook.addComponent(
  new OnPointerDown(
    () => {
      openUI()
      log('OPENED GUESTBOOK')
    },
    { hoverText: 'Open' }
  )
)
engine.addEntity(guestBook)

let guestBookBase = new Entity()
guestBookBase.addComponent(
  new Transform({
    position: new Vector3(8, 0, 4),
    rotation: Quaternion.Euler(0, 60, 0),
  })
)
guestBookBase.addComponent(new GLTFShape('models/guestbook_base.glb'))
engine.addEntity(guestBookBase)
