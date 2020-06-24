import React from 'react'
import { RouteComponentProps } from 'react-router'

import { useListProductsController } from './ListProducts-Controller'
import { HOME_PATH } from '../../App-Constants'
import { Products } from './products'
import { IListProductsParams } from './ListProducts-Types'
import { StyledErrorSection } from '../../common/styles'
import { BackButton } from '../../common/components/backButton'
import {
  MyUIHeader,
  MyUIContent,
  MyUInput,
  MyUIHorizontalSpace,
  MyUIButton,
  MyUIPage,
  MyUISaveIcon,
  MyUIText,
} from '../../common/myUIComponents'

export function ListProducts({
  match,
}: RouteComponentProps<IListProductsParams>) {
  const { id } = match.params
  const {
    name,
    handleName,
    apply,
    products,
    isNew,
  } = useListProductsController(id)

  const errorSection = !name ? (
    <StyledErrorSection>
      <MyUIText color='danger'>Name is required</MyUIText>
    </StyledErrorSection>
  ) : (
    ''
  )

  const productsSection = !isNew ? (
    <Products id={id} name={name} products={products!} />
  ) : (
    ''
  )

  return (
    <MyUIPage>
      <MyUIHeader>
        <BackButton to={HOME_PATH} />
        <MyUIHorizontalSpace width='6px' />
        <MyUInput
          autofocus={true}
          required
          type='text'
          value={name}
          onIonChange={handleName}
          placeholder='Enter the lists name'
          clearInput
        />
        <MyUIHorizontalSpace width='6px' />
        <MyUIButton onClick={apply} disabled={!name}>
          <MyUISaveIcon />
        </MyUIButton>
      </MyUIHeader>
      <MyUIContent>
        {errorSection}
        {productsSection}
      </MyUIContent>
    </MyUIPage>
  )
}
