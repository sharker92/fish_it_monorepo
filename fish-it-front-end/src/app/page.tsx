'use client';
export default function Home() {
  function ListItemDetail({ id }) {
    return <li>{id}</li>;
  }
  function ListItems() {
    const inst = [1, 2, 3];
    return (
      <>
        {inst.map((id) => {
          return <ListItemDetail id={id} />;
        })}
      </>
    );
  }
  return (
    <ul>
      <ListItems />
    </ul>
  );
}
