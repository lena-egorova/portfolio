"use client";

import Header from '../components/Header'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <Header title={"Lena's Portfolio"} count={count} />
      <img src="https://www.princeton.edu/sites/default/files/styles/half_1x_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=JIi_KPMe"/>
      <img src="/img/download.webp"/>
    </div>
  );
}
