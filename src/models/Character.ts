import * as uuid from "uuid"

export interface CharacterAttrs {
  uuid?: string
  name: string
  initiative: number
}

export class Character implements CharacterAttrs {
  uuid: string
  name: string
  initiative: number

  public constructor(attrs: CharacterAttrs) {
    this.uuid = attrs.uuid || uuid()
    this.name = attrs.name
    this.initiative = attrs.initiative
  }
}
