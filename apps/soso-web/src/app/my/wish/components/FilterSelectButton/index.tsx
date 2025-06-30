import CheckIcon from '@/shared/components/icons/CheckIcon'

interface FilterSelectButtonProps {
  label: string
  active?: boolean
  onClick: (area: string) => void
}

export default function FilterSelectButton({ label, active, onClick }: FilterSelectButtonProps) {
  return (
    <button className="flex h-44 w-full items-center justify-between px-14 py-10" onClick={() => onClick(label)}>
      <span className="text-black font-body2_m">{label}</span>
      {active && <CheckIcon />}
    </button>
  )
}
