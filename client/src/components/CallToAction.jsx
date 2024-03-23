import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div
      className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center
    rounded-tl-3xl rounded-br-3xl text-center"
    >
      <div className="flex-1 justiy-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about my projects?</h2>
        <p className="text-gray-500 my-2">Checkout this resource</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.github.com/BosneviNedzma"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bosnevi Nedzma
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://pbs.twimg.com/profile_images/1372304699601285121/5yBS6_3F_400x400.jpg" />
      </div>
    </div>
  );
}
