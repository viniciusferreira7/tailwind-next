import Image from 'next/image'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <Image
        width={40}
        height={40}
        src="https://github.com/viniciusferreira7.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
    </div>
  )
}
