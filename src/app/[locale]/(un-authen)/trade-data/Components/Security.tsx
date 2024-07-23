import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";

const Security = () => {
  return (
    <div>
      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
          <p className="m-0 text-sm-body text-neutral-50">Mintable</p>
        </div>
        <div className="m-0 text-sm-body text-green flex items-center">
          <span>No</span>
          <IconCheck className="w-[10px] h-[10px]"/>
        </div>
      </div>
      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
          <p className="m-0 text-sm-body text-neutral-50">Mutable Info</p>
        </div>
        <div className="m-0 text-sm-body text-green flex items-center">
          <span>No</span>
          <IconCheck className="w-[10px] h-[10px]"/>
        </div>
      </div>
      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
          <p className="m-0 text-sm-body text-neutral-50">First Mint Tx</p>
        </div>
        <div className="m-0 text-sm-body text-status-info">0x4843...474743</div>
      </div>
      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
          <p className="m-0 text-sm-body text-neutral-50">First Mint Time</p>
        </div>
        <div className="m-0 text-sm-body text-white">20/05/2024</div>
      </div>
      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
          <p className="m-0 text-sm-body text-neutral-50">Creation TX</p>
        </div>
        <div className="m-0 text-sm-body text-status-info">0x4843...474743</div>
      </div>

      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
          <p className="m-0 text-sm-body text-neutral-50">Creation Time</p>
        </div>
        <div className="m-0 text-sm-body text-white">20/05/2024</div>
      </div>

      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
          <p className="m-0 text-sm-body text-neutral-50">Ownership Renounced</p>
        </div>
        <div className="m-0 text-sm-body text-green flex items-center">
          <span>Yes</span>
          <IconCheck className="w-[10px] h-[10px]"/>
        </div>
      </div>


      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
          <p className="m-0 text-sm-body text-neutral-50">Creator Address</p>
        </div>
        <div className="m-0 text-sm-body text-status-info">0x4843...474743</div>
      </div>


      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
          <p className="m-0 text-sm-body text-neutral-50">Creator Balance</p>
        </div>
        <div className="m-0 text-sm-body text-white">500.00M</div>
      </div>

      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
          <p className="m-0 text-sm-body text-neutral-50">Token Percentage of Creator</p>
        </div>
        <div className="m-0 text-sm-body text-white">50%</div>
      </div>

      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
          <p className="m-0 text-sm-body text-neutral-50">Update Authority (UA)</p>
        </div>
        <div className="m-0 text-sm-body text-status-info">0x4843...474743</div>
      </div>

      <div className="mb-[18px] flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Image
            src={"/img/request.svg"}
            alt="request"
            width={12}
            height={12}
          />
          <p className="m-0 text-sm-body text-neutral-50">UA Balance</p>
        </div>
        <div className="m-0 text-sm-body text-white">500.00M</div>
      </div>
    </div>
  );
};

export default Security;
