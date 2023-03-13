import Link from 'next/link'

interface Props {
  totalPage: number
  currentPage: number
}

export default (props: Props) => {
  const pagesToShow = 2
  const pages = []
  const startPage = Math.max(props.currentPage - pagesToShow, 1)
  const endPage = Math.min(props.currentPage + pagesToShow, props.totalPage)
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }
  return (
    <nav>
      <ul>
        {pages.map(item => (
          <li>
            <Link href={''}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
