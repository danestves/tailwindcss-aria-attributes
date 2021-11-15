export type AddVariantActions = {
  modifySelectors: ModifySelectors
  separator: string
}

export type ModifySelectors = (generator: ModifySelectorCallback) => void

export type ModifySelectorCallback = (params: ModifySelectorCallbackParams) => void

export type ModifySelectorCallbackParams = {
  className: string
}