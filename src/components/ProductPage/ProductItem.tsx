import Image from "next/image";

export default function ProductItem() {
  return (
    <li>
      <Image
        src={`/images/web-design/image-express.jpg`}
        alt="express"
        width={700}
        height={654}
      ></Image>
      <div>
        <h2>EXPRESS</h2>
        <p>A multi-carrier shipping website for ecommerce businesses</p>
      </div>
    </li>
  );
}
