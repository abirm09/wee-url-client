import { cn } from "@/lib/utils";

// const Demo = ({ className }: { className?: string }) => {
//   return (
//     <>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 21.5 21.5"
//         strokeWidth="1.5"
//         stroke="none"
//         className={`${cn("w-7 h-7", className)}`}
//       ></svg>
//     </>
//   );
// };

const Password = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000"
        viewBox="0 0 30 30"
        strokeWidth="1.5"
        stroke="none"
        className={`${cn("w-7 h-7", className)}`}
      >
        <path d="M21,2a8.9977,8.9977,0,0,0-8.6119,11.6118L2,24v6H8L18.3881,19.6118A9,9,0,1,0,21,2Zm0,16a7.0125,7.0125,0,0,1-2.0322-.3022L17.821,17.35l-.8472.8472-3.1811,3.1812L12.4141,20,11,21.4141l1.3787,1.3786-1.5859,1.586L9.4141,23,8,24.4141l1.3787,1.3786L7.1716,28H4V24.8284l9.8023-9.8023.8472-.8474-.3473-1.1467A7,7,0,1,1,21,18Z" />
        <circle cx="22" cy="10" r="2" />
        <rect
          id="_Transparent_Rectangle_"
          data-name="&lt;Transparent Rectangle&gt;"
          className="fill-none"
          width="32"
          height="32"
        />
      </svg>
    </>
  );
};

const User = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 21.5 21.5"
        strokeWidth="1.5"
        stroke="none"
        className={`${cn("w-7 h-7", className)}`}
      >
        <path
          d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
          fill="#000000"
        />
        <path
          d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
          fill="#000000"
        />
      </svg>
    </>
  );
};

const ViewGrid = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 30 30"
        strokeWidth="1.5"
        stroke="none"
        className={`${cn("w-7 h-7", className)}`}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 1C1.89543 1 1 1.89543 1 3V5C1 6.10457 1.89543 7 3 7H5C6.10457 7 7 6.10457 7 5V3C7 1.89543 6.10457 1 5 1H3ZM5 3H3L3 5H5V3Z"
          fill="#0F0F0F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 9C1.89543 9 1 9.89543 1 11V13C1 14.1046 1.89543 15 3 15H5C6.10457 15 7 14.1046 7 13V11C7 9.89543 6.10457 9 5 9H3ZM5 11H3L3 13H5V11Z"
          fill="#0F0F0F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 19C1 17.8954 1.89543 17 3 17H5C6.10457 17 7 17.8954 7 19V21C7 22.1046 6.10457 23 5 23H3C1.89543 23 1 22.1046 1 21V19ZM3 19H5V21H3L3 19Z"
          fill="#0F0F0F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 1C9.89543 1 9 1.89543 9 3V5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5V3C15 1.89543 14.1046 1 13 1H11ZM13 3H11V5H13V3Z"
          fill="#0F0F0F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 11C9 9.89543 9.89543 9 11 9H13C14.1046 9 15 9.89543 15 11V13C15 14.1046 14.1046 15 13 15H11C9.89543 15 9 14.1046 9 13V11ZM11 11H13V13H11V11Z"
          fill="#0F0F0F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 17C9.89543 17 9 17.8954 9 19V21C9 22.1046 9.89543 23 11 23H13C14.1046 23 15 22.1046 15 21V19C15 17.8954 14.1046 17 13 17H11ZM13 19H11V21H13V19Z"
          fill="#0F0F0F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 3C17 1.89543 17.8954 1 19 1H21C22.1046 1 23 1.89543 23 3V5C23 6.10457 22.1046 7 21 7H19C17.8954 7 17 6.10457 17 5V3ZM19 3H21V5H19V3Z"
          fill="#0F0F0F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 9C17.8954 9 17 9.89543 17 11V13C17 14.1046 17.8954 15 19 15H21C22.1046 15 23 14.1046 23 13V11C23 9.89543 22.1046 9 21 9H19ZM21 11H19V13H21V11Z"
          fill="#0F0F0F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 19C17 17.8954 17.8954 17 19 17H21C22.1046 17 23 17.8954 23 19V21C23 22.1046 22.1046 23 21 23H19C17.8954 23 17 22.1046 17 21V19ZM19 19H21V21H19V19Z"
          fill="#0F0F0F"
        />
      </svg>
    </>
  );
};

const PanelLeft = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 21.5 21.5"
        strokeWidth="1.5"
        stroke="none"
        className={`${cn("w-7 h-7", className)}`}
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(3 3)"
        >
          <path d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" />

          <path d="m2.5 11.5v-8" />
        </g>
      </svg>
    </>
  );
};

const Add = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 21.5 21.5"
        strokeWidth="1.5"
        stroke="none"
        className={`${cn("w-7 h-7", className)}`}
      >
        <g id="Edit / Add_Plus">
          <path
            id="Vector"
            d="M6 12H12M12 12H18M12 12V18M12 12V6"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </>
  );
};

const Dashboard = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 21.5 21.5"
        strokeWidth="1.5"
        stroke="none"
        className={`${cn("w-7 h-7", className)}`}
      >
        <path
          d="M12.5 11.75C12.9142 11.75 13.25 11.4142 13.25 11C13.25 10.5858 12.9142 10.25 12.5 10.25V11.75ZM5.5 10.25C5.08579 10.25 4.75 10.5858 4.75 11C4.75 11.4142 5.08579 11.75 5.5 11.75V10.25ZM12.5 10.25C12.0858 10.25 11.75 10.5858 11.75 11C11.75 11.4142 12.0858 11.75 12.5 11.75V10.25ZM19.5 11.75C19.9142 11.75 20.25 11.4142 20.25 11C20.25 10.5858 19.9142 10.25 19.5 10.25V11.75ZM11.75 11C11.75 11.4142 12.0858 11.75 12.5 11.75C12.9142 11.75 13.25 11.4142 13.25 11H11.75ZM13.25 5C13.25 4.58579 12.9142 4.25 12.5 4.25C12.0858 4.25 11.75 4.58579 11.75 5H13.25ZM6.25 11C6.25 10.5858 5.91421 10.25 5.5 10.25C5.08579 10.25 4.75 10.5858 4.75 11H6.25ZM20.25 11C20.25 10.5858 19.9142 10.25 19.5 10.25C19.0858 10.25 18.75 10.5858 18.75 11H20.25ZM4.75 11C4.75 11.4142 5.08579 11.75 5.5 11.75C5.91421 11.75 6.25 11.4142 6.25 11H4.75ZM12.5 5.75C12.9142 5.75 13.25 5.41421 13.25 5C13.25 4.58579 12.9142 4.25 12.5 4.25V5.75ZM18.75 11C18.75 11.4142 19.0858 11.75 19.5 11.75C19.9142 11.75 20.25 11.4142 20.25 11H18.75ZM12.5 4.25C12.0858 4.25 11.75 4.58579 11.75 5C11.75 5.41421 12.0858 5.75 12.5 5.75V4.25ZM12.5 10.25H5.5V11.75H12.5V10.25ZM12.5 11.75H19.5V10.25H12.5V11.75ZM13.25 11V5H11.75V11H13.25ZM4.75 11V15H6.25V11H4.75ZM4.75 15C4.75 17.6234 6.87665 19.75 9.5 19.75V18.25C7.70507 18.25 6.25 16.7949 6.25 15H4.75ZM9.5 19.75H15.5V18.25H9.5V19.75ZM15.5 19.75C18.1234 19.75 20.25 17.6234 20.25 15H18.75C18.75 16.7949 17.2949 18.25 15.5 18.25V19.75ZM20.25 15V11H18.75V15H20.25ZM6.25 11V9H4.75V11H6.25ZM6.25 9C6.25 7.20507 7.70507 5.75 9.5 5.75V4.25C6.87665 4.25 4.75 6.37665 4.75 9H6.25ZM9.5 5.75H12.5V4.25H9.5V5.75ZM20.25 11V9H18.75V11H20.25ZM20.25 9C20.25 6.37665 18.1234 4.25 15.5 4.25V5.75C17.2949 5.75 18.75 7.20507 18.75 9H20.25ZM15.5 4.25H12.5V5.75H15.5V4.25Z"
          fill="#000000"
        />
      </svg>
    </>
  );
};

const Link = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 21.5 21.5"
        strokeWidth="1.5"
        stroke="none"
        className={`${cn("w-7 h-7", className)}`}
      >
        <title>url [#1424]</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-299.000000, -600.000000)"
            fill="#000000"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M246.400111,448.948654 C244.519883,447.158547 244.754644,444.106996 247.102248,442.631229 C248.809889,441.557573 251.103895,441.880078 252.551048,443.257869 L253.222099,443.896756 C253.641237,444.295804 254.319791,444.295804 254.737858,443.896756 C255.156996,443.498727 255.156996,442.852696 254.737858,442.453648 L254.170788,441.913758 C251.680612,439.542937 247.589992,439.302079 245.025851,441.600438 C242.372737,443.979423 242.32557,447.956645 244.884352,450.391762 L245.642231,451.113316 C246.060298,451.512365 246.739924,451.512365 247.15799,451.113316 C247.577129,450.715288 247.577129,450.069257 247.15799,449.670208 L246.400111,448.948654 Z M261.976841,449.345662 L261.430138,448.825163 C261.011,448.426114 260.332446,448.426114 259.914379,448.825163 C259.495241,449.223192 259.495241,449.869222 259.914379,450.268271 L260.585429,450.907158 C262.032583,452.284948 262.370252,454.469002 261.243616,456.094794 C259.693554,458.329877 256.487306,458.552364 254.60815,456.763278 L253.850271,456.041724 C253.431132,455.642675 252.752578,455.642675 252.334511,456.041724 C251.915373,456.439752 251.915373,457.085783 252.334511,457.484832 L253.092391,458.206386 C255.643669,460.63538 259.806111,460.597618 262.305934,458.09106 C264.742511,455.648799 264.478808,451.727709 261.976841,449.345662 L261.976841,449.345662 Z M257.639668,455.32017 L247.91587,446.062438 C247.497803,445.663389 247.497803,445.017358 247.91587,444.61831 C248.335008,444.220281 249.013562,444.220281 249.431629,444.61831 L259.156499,453.876041 C259.574566,454.27509 259.574566,454.921121 259.156499,455.32017 C258.737361,455.718198 258.058807,455.718198 257.639668,455.32017 L257.639668,455.32017 Z"
                id="url-[#1424]"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

const AddCircle = ({ className }: { className?: string }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 28 28"
        strokeWidth="1.5"
        stroke="none"
        className={`${cn("w-7 h-7", className)}`}
      >
        <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
        <path
          d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export const Icons = {
  PanelLeft,
  Link,
  AddCircle,
  Dashboard,
  Add,
  ViewGrid,
  User,
  Password,
};
