export type Props = {
  text?: string
  fontSize?: number
}

type ChangeTextType = { newText: string }

export default class SignPost implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const sign = new Entity()
    sign.setParent(host)

    sign.addComponent(
      new GLTFShape(
        '1dc0345a-f5dd-43b6-bf14-30e7752101b4/models/signpost/Signpost_Golden.glb'
      )
    )

    const signText = new Entity()
    signText.setParent(host)
    const text = new TextShape(props.text)
    text.fontSize = props.fontSize
    text.color = Color3.White()

    text.width = 20
    text.height = 10
    text.hTextAlign = 'center'

    signText.addComponent(text)

    signText.addComponent(
      new Transform({
        position: new Vector3(0, 2.08, 0.025),
        rotation: Quaternion.Euler(0, 180, 0),
        scale: new Vector3(0.05, 0.05, 0.05)
      })
    )

    channel.handleAction<ChangeTextType>('changeText', (action) => {
      text.value = action.values.newText
    })

    channel.request<string>('getText', (signText) => (text.value = signText))
    channel.reply<string>('getText', () => text.value)
  }
}
