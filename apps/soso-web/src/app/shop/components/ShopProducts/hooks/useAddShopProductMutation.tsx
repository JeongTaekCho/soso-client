import { addShopProduct } from '@/app/shop/components/ShopProducts/api/addShopProduct'
import { AddProductRequest } from '@/app/shop/components/ShopProducts/types'
import { useDialog } from '@/shared/context/DialogContext'
import { CustomError } from '@/shared/utils/customFetch'
import { useMutation } from '@tanstack/react-query'

export const useAddShopProductMutation = () => {
  const { openDialog } = useDialog()

  return useMutation({
    mutationKey: ['addShopProduct'],
    mutationFn: (data: AddProductRequest) => addShopProduct(data),
    onError: (error: CustomError) => {
      if (error.status === 409) {
        openDialog({
          type: 'alert',
          title: '이미 추가 요청된 소품샵입니다.',
          message: (
            <>
              관리자 승인 이후
              <br />
              판매상품 추가 등록이 가능합니다.
            </>
          ),
        })
      }
    },
  })
}
