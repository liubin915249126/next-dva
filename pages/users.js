
import Link from 'next/link';
import styles from '~/style/user.less'

export default function () {
  return (
    <div>
      Users
      <br />
      <div className="green">33333</div>
      <Link href="/">
        <a>
          Back
        </a>
      </Link>
      <Link href="/len">
        <a>
          404
        </a>
      </Link>
      {/* <style dangerouslySetInnerHTML={{ __html: styles }} />  */}
    </div>
  );
}
