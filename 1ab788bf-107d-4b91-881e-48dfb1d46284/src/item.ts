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
        '1ab788bf-107d-4b91-881e-48dfb1d46284/models/signpost/SignPost.glb'
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
        position: new Vector3(-0.172, 1.6, -0.2),
        rotation: Quaternion.Euler(5, 90, 0),
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
