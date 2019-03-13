
import Link from 'next/link';
import styles from '~/less/user.less'

export default function () {
  return (
    <div>
      Users
      <br />
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
