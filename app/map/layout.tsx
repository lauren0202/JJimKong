import AppBar from "../components/Appbar";
import NavBar from "../components/Navbar";

export default function MypageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppBar />
      <main>{children}</main>
      <NavBar />
    </>
  );
}
