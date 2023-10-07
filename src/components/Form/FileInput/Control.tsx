import { ComponentProps } from 'react'

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return <input {...props} type="file" id="photo" className="sr-only" />
}
