import { postReport } from '@/app/report/api/postReport'
import { ReportRequestType, useReportStore } from '@/app/report/store/useReportStore'
import { useToast } from '@/shared/context/ToastContext'
import { useYoilStore } from '@/shared/store/useYoilStore'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export const usePostReportMutation = () => {
  const { openToast } = useToast()
  const { resetReport } = useReportStore()
  const { resetYoil } = useYoilStore()
  const router = useRouter()

  return useMutation({
    mutationKey: ['postReport'],
    mutationFn: (data: ReportRequestType) => postReport(data),
    onSuccess: () => {
      openToast({
        message: '해당 소품샵은 확인 후 업데이트 될 예정입니다.',
      })
      resetReport()
      resetYoil()
      setTimeout(() => {
        router.push('/my/shop')
      }, 10)
    },
  })
}
