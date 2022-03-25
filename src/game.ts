import { buildBuilderScene } from './builderContent'
import { GuestBook } from './guestbook'

buildBuilderScene()

const guestBook = new GuestBook(
  {
    position: new Vector3(8, 0, 10),
    rotation: Quaternion.Euler(0, 300, 0)
  },
  'test'
)
