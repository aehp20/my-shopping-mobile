import React from 'react'
import { RouteComponentProps } from 'react-router'

import { useProductController } from './Product-Controller'
import { StyledButton, StyledLabelForToggle } from './Product-Styles'
import { StyledErrorSection } from '../../../common/styles'
import { getListProductsPath } from '../../listsProducts/ListsProducts-Utils'
import { IProductParams } from './Product-Types'
import { BackButton } from '../../../common/components/backButton'
import {
  MyUIHeader,
  MyUIContent,
  MyUIPage,
  MyUITitle,
  MyUIList,
  MyUIItem,
  MyUIText,
  MyUIInput,
  MyUIToggle,
  MyUILabel,
  MyUITextarea,
} from '../../../common/myUIComponents'

export function Product({ match }: RouteComponentProps<IProductParams>) {
  const { idListProducts, id } = match.params
  const {
    title,
    name,
    quantity,
    toBuy,
    description,
    validationResponse,
    handleName,
    handleQuantity,
    handleToBuy,
    handleDescription,
    apply,
  } = useProductController(idListProducts, id)

  return (
    <MyUIPage>
      <MyUIHeader>
        <BackButton to={getListProductsPath(idListProducts)} />
        <MyUITitle>{title}</MyUITitle>
      </MyUIHeader>
      <MyUIContent>
        <form>
          <MyUIList>
            <MyUIItem>
              <MyUILabel position='stacked'>
                Name <MyUIText color='danger'>*</MyUIText>
              </MyUILabel>
              <MyUIInput
                autofocus={true}
                required
                type='text'
                value={name}
                onIonChange={handleName}
                clearInput
              />
            </MyUIItem>
            <MyUIItem>
              <MyUILabel position='stacked'>Quantity</MyUILabel>
              <MyUIInput
                required
                type='text'
                value={quantity}
                onIonChange={handleQuantity}
                clearInput
              />
            </MyUIItem>
            <MyUIItem lines='full'>
              <StyledLabelForToggle>To buy</StyledLabelForToggle>
              <MyUIToggle checked={toBuy} onIonChange={handleToBuy} />
            </MyUIItem>
            <MyUIItem>
              <MyUILabel position='stacked'>Description</MyUILabel>
              <MyUITextarea
                value={description}
                onIonChange={handleDescription}
              />
            </MyUIItem>
          </MyUIList>

          {validationResponse.error && (
            <StyledErrorSection>
              <MyUIText color='danger'>{validationResponse.message}</MyUIText>
            </StyledErrorSection>
          )}

          <StyledButton expand='full' onClick={apply} strong>
            Apply
          </StyledButton>
        </form>
      </MyUIContent>
    </MyUIPage>
  )
}
