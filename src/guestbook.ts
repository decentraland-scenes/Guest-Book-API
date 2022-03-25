import { openUI } from './ui'

// external servers being used by the project - Please change these to your own if working on something else!
export const fireBaseServer =
  'https://us-central1-dcl-guestbook.cloudfunctions.net/app/'

// get player data

export class GuestBook extends Entity {
  eventName: string
  constructor(
    transform: TranformConstructorArgs,
    eventName: string

    //,sound: AudioClip
  ) {
    super()
    engine.addEntity(this)

    this.addComponent(new GLTFShape('models/guestbook/guestbook.glb'))
    this.addComponent(new Transform(transform))

    this.eventName = eventName

    this.addComponent(
      new OnPointerDown(
        () => {
          openUI(eventName).catch((error) => log(error))
          log('OPENED GUESTBOOK')
        },
        { hoverText: 'Open' }
      )
    )

    const guestBookBase = new Entity()
    guestBookBase.addComponent(new Transform())
    guestBookBase.addComponent(
      new GLTFShape('models/guestbook/guestbook_base.glb')
    )
    guestBookBase.setParent(this)
  }
}
