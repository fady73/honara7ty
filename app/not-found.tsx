import Link from "next/link"

export default function NotFound() {
  return (
    <main className="nf">
      <div className="nf-inner">
        <div className="nf-code anim-up">٤٠٤</div>
        <h1 className="anim-up d1">الصفحة مش موجودة</h1>
        <p className="anim-up d2">
          يبدو إن الرابط اللي فتحته غير صحيح أو الصفحة اتنقلت لمكان تاني.
        </p>
        <div className="actions anim-up d3">
          <Link href="/" className="btn btn-primary">
            الرئيسية
          </Link>
          <a href="mailto:fadykhayrat@gmail.com" className="btn btn-outline">
            تواصل معنا
          </a>
        </div>
      </div>
    </main>
  )
}
