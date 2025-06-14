import {HeaderGallery} from "./components/header-gallery";
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Brian | Engineer & Maker',
    icons: {
        icon: '/assets/icon.png'
    }
}


export default function Home() {
  return (
    <div>
        <main >
        <HeaderGallery/>
      </main>
    </div>
  );
}
