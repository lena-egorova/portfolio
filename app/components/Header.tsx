"use client";

type HeaderProps = {
  title: string;
  count: number;
};

export default function Header(props: HeaderProps) {
  const { count, title } = props;

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <h2 style={{fontWeight: 'bold'}}>
        {title} {count}
      </h2>
    </div>
  );
}
