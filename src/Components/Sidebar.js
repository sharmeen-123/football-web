import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../styles/pointer.css"
import "../styles/font.css"
export default function Sidebar() {
  const [drop, setdrop] = useState(false);

  return (
    <>
      <div class="w-28 bg-[#212121] ">
        <div class=" py-4 px-3 flex justify-center  h-screen ">
          <ul class="space-y-[18.5px] ">
            <li onClick={() => setdrop(false)}>
              <NavLink className="flex items-center p-2.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <img src={logo} alt="logo" />
              </NavLink>
            </li>
            <li onClick={() => setdrop(false)}>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2.5 text-base font-normal rounded-lg border-2 border-green-500 border-line "
                    : "flex items-center p-2.5 text-base font-normal  rounded-lg hover:bg-gray-500 border-dashed"
                }
              >
                <svg
                  // className=" text-green-500 fill-current"
                  width="33"
                  height="25"
                  viewBox="0 0 33 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 0C13.6914 7.19067e-05 10.9323 0.745221 8.49994 2.16055C6.06763 3.57589 4.04783 5.61153 2.64355 8.0629C1.23927 10.5143 0.499982 13.295 0.5 16.1255C0.500018 18.9561 1.23934 21.7368 2.64365 24.1882C2.85583 24.5602 3.20597 24.8321 3.61707 24.944C4.02816 25.0559 4.46651 24.9986 4.8357 24.7848C5.20489 24.571 5.47468 24.2181 5.5857 23.8038C5.69672 23.3895 5.6399 22.9477 5.42772 22.5756C4.294 20.6182 3.69757 18.392 3.69967 16.1254C3.70044 14.1471 4.15265 12.1955 5.02135 10.4215C5.89004 8.64746 7.15194 7.09855 8.70948 5.89452C10.267 4.69049 12.0784 3.8636 14.0037 3.4778C15.929 3.092 17.9165 3.15762 19.8126 3.66958C21.7087 4.18154 23.4625 5.12614 24.9385 6.43032C26.4145 7.7345 27.5732 9.36333 28.3248 11.1909C29.0764 13.0184 29.4009 14.9956 29.2732 16.9698C29.1455 18.9439 28.569 20.8619 27.5883 22.5756C27.4825 22.7597 27.4139 22.963 27.3864 23.1739C27.3589 23.3848 27.3731 23.599 27.4281 23.8044C27.4831 24.0097 27.5779 24.2021 27.707 24.3703C27.8361 24.5386 27.997 24.6795 28.1803 24.7848C28.5477 24.995 28.9827 25.0503 29.3904 24.9385C29.798 24.8267 30.1453 24.557 30.3563 24.1882C31.7607 21.7368 32.5 18.9561 32.5 16.1255C32.5 13.295 31.7607 10.5143 30.3565 8.0629C28.9522 5.61153 26.9324 3.57589 24.5001 2.16055C22.0677 0.745221 19.3086 7.19067e-05 16.5 0ZM21.0441 9.28826L18.5641 11.7716C17.9221 11.4526 17.2158 11.287 16.5 11.2878C15.5506 11.2878 14.6226 11.5715 13.8332 12.1031C13.0438 12.6347 12.4286 13.3902 12.0653 14.2742C11.702 15.1581 11.6069 16.1308 11.7921 17.0692C11.9773 18.0076 12.4345 18.8696 13.1058 19.5462C13.7771 20.2227 14.6324 20.6835 15.5635 20.8701C16.4947 21.0568 17.4598 20.961 18.3369 20.5948C19.214 20.2287 19.9637 19.6086 20.4912 18.8131C21.0186 18.0175 21.3001 17.0822 21.3001 16.1254C21.299 15.4095 21.1348 14.7033 20.8201 14.0614L23.3002 11.5781C23.4501 11.4282 23.5692 11.2498 23.6504 11.0533C23.7316 10.8568 23.7735 10.646 23.7735 10.4332C23.7735 10.2203 23.7316 10.0095 23.6504 9.81302C23.5692 9.61651 23.4501 9.43816 23.3002 9.28826C23.0004 8.98792 22.5949 8.81934 22.1721 8.81934C21.7494 8.81934 21.3439 8.98792 21.0441 9.28826ZM16.5 17.738C16.0756 17.738 15.6687 17.5681 15.3686 17.2657C15.0685 16.9633 14.9 16.5531 14.9 16.1254C14.9 15.6978 15.0685 15.2876 15.3686 14.9852C15.6687 14.6828 16.0756 14.5129 16.5 14.5129C16.9175 14.5104 17.3194 14.6724 17.62 14.9644C17.7731 15.1157 17.8945 15.2964 17.977 15.4958C18.0594 15.6953 18.1013 15.9094 18.1 16.1254C18.1 16.5531 17.9315 16.9633 17.6314 17.2657C17.3313 17.5681 16.9244 17.738 16.5 17.738Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/playerarea/attendence"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center  text-base font-normal p-1.5 rounded-lg border-2 border-green-500 border-line "
                    : "flex items-center text-base font-normal  p-1.5 rounded-lg hover:bg-gray-500 border-dashed"
                }
                onClick={() => setdrop(true)}
              >
                <svg
                  width="33"
                  height="21"
                  viewBox="0 0 33 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 8.75C24.9749 8.75 27 6.7811 27 4.375C27 1.96897 24.9749 0 22.5 0C20.025 0 18 1.96897 18 4.375C18 6.7811 20.025 8.75 22.5 8.75ZM10.5 8.75C12.975 8.75 15 6.7811 15 4.375C15 1.96897 12.975 0 10.5 0C8.02511 0 5.99996 1.96897 5.99996 4.375C5.99996 6.7811 8.02511 8.75 10.5 8.75ZM10.5 11.9583C6.97479 11.9583 0 13.6353 0 17.0625V21H21.2143V17.0625C21.2143 13.6353 14.0251 11.9583 10.5 11.9583ZM22.5 12.7606C22.0503 12.7606 21.7394 12.7606 21.2143 12.8333C22.9399 14.0731 23.5714 14.875 23.5714 17.0625V21H33V17.0625C33 13.6353 26.0252 12.7606 22.5 12.7606Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
            </li>

            {/* DropDown */}
            {drop === true ? (
              <>
                <svg
                  width="76"
                  height="2"
                  viewBox="0 0 76 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.5 1H75.5" stroke="white" stroke-opacity="0.1" />
                </svg>

                <li>
                  <NavLink
                    to="/playerarea/attendence"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2.5 text-base font-normal rounded-lg border-2 border-green-500 border-line"
                        : "flex items-center p-2.5 text-base font-normal  rounded-lg hover:bg-gray-500 border-dashed"
                    }
                  >
                    <svg
                      width="31"
                      height="32"
                      viewBox="0 0 31 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.1904 0.5H5.80959C4.26879 0.5 2.7911 1.11208 1.70159 2.20159C0.612081 3.2911 0 4.76879 0 6.30959V25.6904C0 26.4533 0.15027 27.2088 0.442229 27.9136C0.734189 28.6185 1.16212 29.2589 1.70159 29.7984C2.24106 30.3379 2.88151 30.7658 3.58636 31.0578C4.29121 31.3497 5.04667 31.5 5.80959 31.5H25.1904C25.9533 31.5 26.7088 31.3497 27.4136 31.0578C28.1185 30.7658 28.7589 30.3379 29.2984 29.7984C29.8379 29.2589 30.2658 28.6185 30.5578 27.9136C30.8497 27.2088 31 26.4533 31 25.6904V6.30959C31 4.76879 30.3879 3.2911 29.2984 2.20159C28.2089 1.11208 26.7312 0.5 25.1904 0.5V0.5ZM5.80959 2.82384H25.1904C25.6483 2.82323 26.1019 2.91297 26.5251 3.08793C26.9483 3.26289 27.3328 3.51962 27.6566 3.84343C27.9804 4.16723 28.2371 4.55174 28.4121 4.97493C28.587 5.39812 28.6768 5.85167 28.6762 6.30959V8.14543H2.32384V6.30959C2.32323 5.85167 2.41297 5.39812 2.58793 4.97493C2.76289 4.55174 3.01962 4.16723 3.34343 3.84343C3.66723 3.51962 4.05174 3.26289 4.47493 3.08793C4.89812 2.91297 5.35167 2.82323 5.80959 2.82384V2.82384ZM20.566 17.5802L17.7541 21.7864C17.4036 22.3106 16.9304 22.7413 16.3756 23.041C15.8207 23.3407 15.2011 23.5003 14.5705 23.506H14.5472C13.9206 23.5065 13.3033 23.3544 12.7486 23.0629C12.1939 22.7714 11.7186 22.3492 11.3636 21.8328L10.434 20.485C10.3471 20.3584 10.2859 20.2158 10.254 20.0655C10.2221 19.9152 10.2201 19.7601 10.2482 19.6091C10.2762 19.458 10.3338 19.314 10.4175 19.1852C10.5012 19.0564 10.6095 18.9453 10.7361 18.8583C10.8628 18.7713 11.0053 18.7102 11.1556 18.6783C11.3059 18.6464 11.461 18.6444 11.612 18.6725C11.7631 18.7005 11.9071 18.7581 12.036 18.8418C12.1648 18.9255 12.2758 19.0338 12.3628 19.1604L13.2691 20.5082C13.413 20.7144 13.604 20.8831 13.8264 21.0004C14.0487 21.1176 14.2959 21.1799 14.5472 21.1822C14.8023 21.1859 15.054 21.1237 15.2779 21.0016C15.5018 20.8794 15.6904 20.7015 15.8253 20.485L18.6372 16.2789C18.8067 16.0232 19.0709 15.8453 19.3716 15.7843C19.6722 15.7232 19.9848 15.7841 20.2406 15.9535C20.496 16.129 20.6728 16.397 20.7335 16.7008C20.7943 17.0046 20.7342 17.3201 20.566 17.5802V17.5802Z"
                        fill="white"
                        fill-opacity="0.28"
                      />
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/playerarea/players"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2.5 text-base font-normal rounded-lg border-2 border-green-500 border-line "
                        : "flex items-center p-2.5 text-base font-normal  rounded-lg hover:bg-gray-500 border-dashed"
                    }
                  >
                    <svg
                      width="30"
                      height="31"
                      viewBox="0 0 30 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.2906 10.1816H20.5331C20.4388 10.1812 20.3468 10.2112 20.2709 10.2671C20.1949 10.3231 20.139 10.402 20.1113 10.4922L19.1974 13.4224L18.8342 12.2503C18.7756 12.0687 18.6057 11.9397 18.4124 11.9397H16.6549C16.5144 11.9397 16.3855 12.0042 16.3035 12.1155C16.2214 12.2269 16.1922 12.3676 16.2332 12.5023L17.5688 17.0091C17.6216 17.1966 17.7973 17.3256 17.9906 17.3256H20.0762C20.2636 17.3256 20.4277 17.2083 20.4921 17.0325L22.7065 10.7676C22.7534 10.6328 22.7358 10.4863 22.6538 10.3691C22.5659 10.2519 22.4312 10.1816 22.2906 10.1816ZM19.7657 16.4465H18.3187L17.2466 12.8188H18.0902L18.7756 15.0282C18.8342 15.2099 19.0041 15.3388 19.1974 15.3388C19.3907 15.3388 19.5606 15.2158 19.6192 15.0282L20.8612 11.0607H21.6755L19.7657 16.4465ZM29.9883 12.3676C29.9883 12.3558 29.9883 12.3441 29.9824 12.3324C29.9824 12.3207 29.9766 12.3089 29.9766 12.3031C29.9707 12.2914 29.9707 12.2796 29.9649 12.2679C29.959 12.2562 29.9531 12.2503 29.9531 12.2386L29.9356 12.2035L28.7522 10.0878C28.7288 10.0468 28.6995 10.0058 28.6643 9.97646L26.4323 6.06749C26.3913 5.99717 26.3386 5.94442 26.2683 5.9034L21.1013 2.97314L19.6544 0.705118L19.6485 0.699258C19.6485 0.693397 19.6426 0.693397 19.6426 0.687537C19.6368 0.675816 19.6251 0.664095 19.6134 0.652373L19.6016 0.640652C19.5899 0.628931 19.5782 0.61135 19.5606 0.599629C19.5489 0.587908 19.5313 0.576187 19.5138 0.570326C19.5079 0.570326 19.5079 0.564466 19.5021 0.564466C19.4903 0.558605 19.4728 0.546884 19.461 0.541024H19.4552L19.4025 0.523442C19.3966 0.523442 19.3907 0.523442 19.3907 0.517582C19.379 0.511721 19.3615 0.511721 19.3497 0.505861H19.338C19.3204 0.505861 19.3029 0.5 19.2853 0.5H10.8553C10.8494 0.5 10.8377 0.505861 10.8319 0.505861H10.8143C10.8084 0.505861 10.7967 0.511721 10.7909 0.511721C10.785 0.511721 10.7791 0.517582 10.7791 0.517582C10.7733 0.523442 10.7674 0.523442 10.7557 0.529303C10.7499 0.529303 10.744 0.535163 10.7381 0.535163C10.7381 0.535163 10.7323 0.535163 10.7323 0.541024C10.7264 0.558605 10.7206 0.558605 10.7206 0.558605C10.7147 0.564466 10.7088 0.564466 10.703 0.570326L10.6971 0.576187C10.6913 0.576187 10.6913 0.582047 10.6854 0.582047C10.6796 0.587908 10.6737 0.587908 10.6678 0.593768L10.6561 0.605489L10.6444 0.61721L10.6327 0.628931L10.621 0.640652C10.621 0.646513 10.6151 0.646513 10.6151 0.652373L10.6093 0.658234C10.6034 0.669955 10.5917 0.675816 10.5858 0.687537C10.5858 0.687537 10.5858 0.693397 10.58 0.693397L9.03925 2.96728L3.86643 5.89754C3.80199 5.9327 3.74341 5.99131 3.70826 6.05577L1.32396 10.0644V10.0702L0.0820152 12.1507L0.0585823 12.1859V12.1917C0.0468658 12.2093 0.0351494 12.2328 0.0292912 12.2562C0.0292912 12.2621 0.0292912 12.2679 0.0234329 12.2679C0.0175747 12.2855 0.0117165 12.3089 0.00585823 12.3265V12.35C0.00585823 12.3676 0 12.3851 0 12.4027V12.4203C0 12.5375 0.0468658 12.6489 0.134739 12.7309L3.44464 15.878C3.45636 15.8897 3.46807 15.8956 3.47979 15.9073C3.48565 15.9132 3.48565 15.9132 3.49151 15.9132C3.49736 15.919 3.50908 15.9249 3.51494 15.9307C3.5208 15.9366 3.52665 15.9366 3.53251 15.9425C3.53837 15.9483 3.55009 15.9483 3.55595 15.9542C3.5618 15.9542 3.56766 15.96 3.57352 15.96C3.57938 15.9659 3.5911 15.9659 3.59695 15.9718C3.60281 15.9718 3.60867 15.9776 3.61453 15.9776C3.62039 15.9776 3.6321 15.9835 3.63796 15.9835C3.64382 15.9835 3.64968 15.9894 3.65554 15.9894C3.66139 15.9894 3.67311 15.9952 3.67897 15.9952H3.79028C3.9133 15.9835 4.01875 15.919 4.0949 15.8194L5.39543 14.0671V14.0612L6.19801 12.9829C6.98887 17.4896 7.38137 23.6901 7.1529 28.484L7.07674 30.0429C7.07089 30.1601 7.11189 30.2773 7.19977 30.3652C7.28178 30.4531 7.39895 30.5 7.51611 30.5H22.5542C22.6714 30.5 22.7885 30.4531 22.8705 30.3652C22.9525 30.2773 22.9994 30.1601 22.9936 30.0429L22.9174 28.3726C22.6948 23.5611 23.0873 17.4017 23.8781 12.9712L25.993 15.7608L26.0398 15.8194C26.116 15.919 26.2332 15.9835 26.362 15.9952H26.4441C26.4499 15.9952 26.4558 15.9952 26.4675 15.9894C26.4733 15.9894 26.4851 15.9894 26.4909 15.9835C26.4968 15.9835 26.5026 15.9776 26.5144 15.9776C26.5202 15.9776 26.5319 15.9718 26.5378 15.9718C26.5436 15.9718 26.5495 15.9659 26.5554 15.9659C26.5612 15.96 26.5729 15.9601 26.5788 15.9542C26.5847 15.9542 26.5905 15.9483 26.5964 15.9483C26.6022 15.9425 26.6139 15.9425 26.6198 15.9366C26.6257 15.9307 26.6315 15.9307 26.6374 15.9249C26.6432 15.919 26.655 15.9132 26.6608 15.9073L26.6725 15.8956C26.6842 15.8839 26.696 15.878 26.7077 15.8663L29.877 12.7192C29.8946 12.7016 29.9121 12.684 29.9238 12.6606C29.9297 12.6547 29.9356 12.643 29.9414 12.6371C29.9473 12.6254 29.959 12.6137 29.9649 12.602C29.9707 12.5903 29.9707 12.5844 29.9766 12.5727C29.9824 12.5609 29.9883 12.5492 29.9883 12.5375C29.9941 12.5258 29.9941 12.5141 29.9941 12.5023C29.9941 12.4906 30 12.4789 30 12.4672V12.3969C29.9941 12.391 29.9941 12.3793 29.9883 12.3676ZM18.389 1.37908L17.2642 2.82663H12.9525L11.8336 1.37908H18.389ZM16.5378 3.73501L15.1025 5.62795L13.9953 4.18041L13.638 3.71156L16.5378 3.73501ZM10.9608 1.68969L12.3843 3.53575L14.751 6.62424C14.7627 6.63596 14.7745 6.65355 14.7862 6.66527L14.792 6.67113L14.8213 6.70043C14.8272 6.70629 14.8272 6.70629 14.833 6.70629C14.8448 6.71215 14.8506 6.71801 14.8623 6.72973C14.8682 6.73559 14.874 6.73559 14.8799 6.74145C14.8858 6.74731 14.8975 6.75317 14.9033 6.75904C14.9092 6.7649 14.9151 6.7649 14.9209 6.7649C14.9326 6.77076 14.9385 6.77076 14.9502 6.77662C14.9561 6.77662 14.9619 6.78248 14.9678 6.78248C14.9795 6.78248 14.9854 6.78834 14.9971 6.78834C15.0029 6.78834 15.0146 6.78834 15.0205 6.7942C15.0264 6.7942 15.0381 6.80006 15.0439 6.80006H15.1435C15.1494 6.80006 15.1611 6.80006 15.167 6.7942C15.1787 6.7942 15.1845 6.7942 15.1963 6.78834C15.2021 6.78834 15.2138 6.78248 15.2197 6.78248C15.2255 6.78248 15.2373 6.77662 15.2431 6.77662C15.249 6.77662 15.2607 6.77076 15.2666 6.7649C15.2724 6.75903 15.2841 6.75903 15.29 6.75317C15.2958 6.74731 15.3076 6.74145 15.3134 6.74145C15.3193 6.73559 15.3251 6.73559 15.331 6.72973C15.3368 6.72387 15.3486 6.71801 15.3544 6.71215C15.3603 6.70629 15.3661 6.70629 15.372 6.70043C15.3779 6.69457 15.3896 6.68871 15.3954 6.67699C15.4013 6.67113 15.4071 6.67113 15.4071 6.66527C15.413 6.65941 15.4189 6.64769 15.4306 6.64182C15.4364 6.63596 15.4364 6.6301 15.4423 6.6301L15.4482 6.62424L17.7856 3.58263L19.2384 1.70727L20.2285 3.2603L15.0967 9.13255L9.88284 3.26617L10.9608 1.68969ZM3.69069 14.8993L0.995899 12.3324L1.7809 11.0196L4.47569 13.8444L3.69069 14.8993ZM23.9777 11.6584C23.8723 11.5236 23.6965 11.4592 23.5325 11.4943C23.3626 11.5354 23.2337 11.6643 23.1986 11.8342C22.2613 16.4348 21.7985 23.0982 22.0387 28.4195L22.0914 29.6326H7.98477L8.03749 28.5367C8.28354 23.3209 7.80902 16.4582 6.88342 11.8401C6.84827 11.6701 6.71939 11.5354 6.5495 11.5002C6.37961 11.465 6.20387 11.5295 6.09842 11.6643L5.00879 13.1353L2.2437 10.2402L4.39953 6.61252L9.24429 3.86394L14.7803 10.0937C14.8623 10.1874 14.9854 10.2402 15.1084 10.2402C15.2373 10.2402 15.3544 10.1874 15.4364 10.0878L20.8787 3.86394L25.7235 6.61252L27.8032 10.2519L25.0557 13.0943L23.9777 11.6584ZM26.4323 14.8934L25.6005 13.7917L28.266 11.0372L29.0041 12.3324L26.4323 14.8934Z"
                        fill="white"
                        fill-opacity="0.28"
                      />
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/playerarea/skill"}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center p-2.5 text-base font-normal rounded-lg border-2 border-green-500 border-line "
                        : "flex items-center p-2.5 text-base font-normal  rounded-lg hover:bg-gray-500 border-dashed"
                    }
                  >
                    <svg
                      width="29"
                      height="33"
                      viewBox="0 0 29 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.98999 32.5C7.86562 32.5 6.95518 31.59 6.95518 30.47V22.325C6.95518 22.205 6.90774 22.0899 6.82331 22.005C6.73887 21.9202 6.62435 21.8725 6.50493 21.8725C6.38552 21.8725 6.271 21.9202 6.18656 22.005C6.10213 22.0899 6.05469 22.205 6.05469 22.325V30.47C6.05469 31.59 5.14923 32.5 4.03481 32.5C2.91044 32.5 2 31.585 2 30.465V12.85C2 12.58 2.21393 12.365 2.48258 12.365C2.75124 12.365 2.96517 12.58 2.96517 12.85V30.465C2.96517 31.055 3.44277 31.53 4.02486 31.53C4.61192 31.53 5.08455 31.055 5.08455 30.47V22.325C5.08455 21.54 5.72136 20.905 6.49747 20.905C7.27358 20.905 7.9104 21.545 7.9104 22.325V30.47C7.9104 31.055 8.38303 31.53 8.96511 31.53C9.56212 31.53 10.0348 31.055 10.0348 30.47V12.85C10.0348 12.58 10.2487 12.365 10.5173 12.365C10.786 12.365 10.9999 12.58 10.9999 12.85V30.47C11.0099 31.59 10.1044 32.5 8.98999 32.5ZM6.50742 7.66C4.54227 7.66 2.94526 6.055 2.94526 4.08C2.94526 2.105 4.54227 0.5 6.50742 0.5C8.47258 0.5 10.0696 2.105 10.0696 4.08C10.0696 6.055 8.47258 7.66 6.50742 7.66ZM6.50742 1.47C5.0746 1.47 3.91043 2.64 3.91043 4.08C3.91043 5.52 5.0746 6.69 6.50742 6.69C7.94025 6.69 9.10441 5.52 9.10441 4.08C9.10441 2.64 7.94025 1.47 6.50742 1.47Z"
                        fill="white"
                        fill-opacity="0.28"
                      />
                      <path
                        d="M11.022 20.5H10.6149C10.3435 20.5 10.1274 20.287 10.1274 20.0196C10.1274 19.7521 10.3435 19.5391 10.6149 19.5391H11.022C11.6302 19.5391 12.1277 19.0487 12.1277 18.4494V11.1981C12.1277 10.0391 11.1728 9.09306 9.99168 9.09306H8.86083C7.4435 9.81621 5.65927 9.81621 4.24194 9.09306H3.11109C2.54498 9.09437 2.00244 9.31658 1.60214 9.71107C1.20184 10.1056 0.976371 10.6402 0.975043 11.1981V18.4445C0.975043 19.0438 1.47262 19.5341 2.08076 19.5341H2.48787C2.75927 19.5341 2.97539 19.7471 2.97539 20.0146C2.97539 20.2821 2.75927 20.495 2.48787 20.495H2.08076C0.934835 20.495 0 19.5738 0 18.4445V11.1981C0 9.50912 1.3922 8.13217 3.11109 8.13217H4.36759C4.44801 8.13217 4.53345 8.15198 4.60381 8.19161C5.78995 8.83551 7.32288 8.83551 8.50399 8.19161C8.57435 8.15198 8.65477 8.13217 8.74021 8.13217H9.99168C11.7055 8.13217 13.0977 9.50417 13.0977 11.1981V18.4445C13.0987 18.7138 13.0457 18.9807 12.9418 19.2299C12.838 19.479 12.6853 19.7056 12.4925 19.8965C12.2997 20.0874 12.0705 20.239 11.8182 20.3425C11.5659 20.4461 11.2953 20.4996 11.022 20.5ZM28.5125 6.03206H24.8887C24.6173 6.03206 24.4012 5.81908 24.4012 5.55162V1.98045C24.4012 1.71298 24.6173 1.5 24.8887 1.5H28.5125C28.7839 1.5 29 1.71298 29 1.98045V5.55162C29 5.81908 28.7789 6.03206 28.5125 6.03206ZM25.3712 5.07117H28.0199V2.4609H25.3712V5.07117ZM28.5125 14.5216H24.8887C24.6173 14.5216 24.4012 14.3087 24.4012 14.0412V10.47C24.4012 10.2026 24.6173 9.98957 24.8887 9.98957H28.5125C28.7839 9.98957 29 10.2026 29 10.47V14.0412C29 14.3037 28.7789 14.5216 28.5125 14.5216ZM25.3712 13.5607H28.0199V10.9505H25.3712V13.5607Z"
                        fill="white"
                        fill-opacity="0.28"
                      />
                      <path
                        d="M24.8553 12.5265H14.4909C14.2176 12.5265 14 12.2989 14 12.0132C14 11.7275 14.2176 11.5 14.4909 11.5H24.8553C25.1285 11.5 25.3462 11.7275 25.3462 12.0132C25.3462 12.2989 25.1285 12.5265 24.8553 12.5265ZM28.5091 23.5H24.8603C24.587 23.5 24.3694 23.2725 24.3694 22.9868V19.172C24.3694 18.8862 24.587 18.6587 24.8603 18.6587H28.5091C28.7824 18.6587 29 18.8862 29 19.172V22.9868C29 23.2725 28.7773 23.5 28.5091 23.5ZM25.3462 22.4735H28.0132V19.6852H25.3462V22.4735Z"
                        fill="white"
                        fill-opacity="0.28"
                      />
                      <path
                        d="M24.8553 21.4409H14.4909C14.2176 21.4409 14 21.2324 14 20.9705C14 20.7086 14.2176 20.5 14.4909 20.5H24.8553C25.1285 20.5 25.3462 20.7086 25.3462 20.9705C25.3462 21.2324 25.1285 21.4409 24.8553 21.4409ZM28.5091 31.5H24.8603C24.587 31.5 24.3694 31.2914 24.3694 31.0295V27.5326C24.3694 27.2707 24.587 27.0622 24.8603 27.0622H28.5091C28.7824 27.0622 29 27.2707 29 27.5326V31.0295C29 31.2866 28.7773 31.5 28.5091 31.5ZM25.3462 30.5591H28.0132V28.0031H25.3462V30.5591Z"
                        fill="white"
                        fill-opacity="0.28"
                      />
                      <path
                        d="M24.5617 29.5H18.4339C18.1923 29.5 18 29.2904 18 29.0272V3.97282C18 3.7096 18.1923 3.5 18.4339 3.5H24.5617C24.8032 3.5 24.9955 3.7096 24.9955 3.97282C24.9955 4.23603 24.8032 4.44563 24.5617 4.44563H18.8722V28.5592H24.5661C24.8077 28.5592 25 28.7688 25 29.0321C24.9955 29.2904 24.8032 29.5 24.5617 29.5Z"
                        fill="white"
                        fill-opacity="0.28"
                      />
                    </svg>
                  </NavLink>
                </li>
                <svg
                  width="76"
                  height="2"
                  viewBox="0 0 76 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.5 1H75.5" stroke="white" stroke-opacity="0.1" />
                </svg>
              </>
            ) : (
              <li></li>
            )}
            <li onClick={() => setdrop(false)}>
              <NavLink
                to={"/selectedGroup"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2.5 text-base font-normal rounded-lg border-2 border-green-500 border-line "
                    : "flex items-center p-2.5 text-base font-normal  rounded-lg hover:bg-gray-500 border-dashed"
                }
              >
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.03021 12C6.56771 12.0446 5.37153 12.6161 4.44166 13.7143H2.62709C1.8868 13.7143 1.26389 13.5335 0.758338 13.1719C0.252779 12.8103 0 12.2813 0 11.5848C0 8.43304 0.559721 6.85714 1.67916 6.85714C1.73333 6.85714 1.92968 6.9509 2.26822 7.1384C2.60677 7.3259 3.04687 7.51563 3.58854 7.7076C4.1302 7.89955 4.66736 7.99553 5.2 7.99553C5.80486 7.99553 6.4052 7.89286 7.00104 7.68751C6.9559 8.01786 6.93334 8.3125 6.93334 8.57143C6.93334 9.8125 7.29896 10.9554 8.03021 12ZM22.5333 20.5312C22.5333 21.6027 22.2038 22.4487 21.5448 23.0692C20.8858 23.6897 20.0101 24 18.9177 24H7.08229C5.98993 24 5.11424 23.6897 4.45521 23.0692C3.79618 22.4487 3.46666 21.6027 3.46666 20.5312C3.46666 20.058 3.48246 19.596 3.51406 19.1451C3.54566 18.6942 3.60886 18.2076 3.70365 17.6853C3.79844 17.1629 3.91806 16.6786 4.0625 16.2321C4.20694 15.7857 4.40104 15.3504 4.64479 14.9263C4.88854 14.5022 5.1684 14.1406 5.48438 13.8415C5.80035 13.5424 6.18629 13.3036 6.64219 13.125C7.09809 12.9464 7.60139 12.8571 8.15209 12.8571C8.24236 12.8571 8.43646 12.9531 8.73438 13.1451C9.03229 13.3371 9.3618 13.5513 9.72291 13.7879C10.084 14.0245 10.567 14.2388 11.1719 14.4308C11.7767 14.6228 12.3861 14.7188 13 14.7188C13.6139 14.7188 14.2233 14.6228 14.8281 14.4308C15.433 14.2388 15.916 14.0245 16.2771 13.7879C16.6382 13.5513 16.9677 13.3371 17.2656 13.1451C17.5635 12.9531 17.7576 12.8571 17.8479 12.8571C18.3986 12.8571 18.9019 12.9464 19.3578 13.125C19.8137 13.3036 20.1996 13.5424 20.5156 13.8415C20.8316 14.1406 21.1115 14.5022 21.3552 14.9263C21.599 15.3504 21.7931 15.7857 21.9375 16.2321C22.0819 16.6786 22.2016 17.1629 22.2963 17.6853C22.3911 18.2076 22.4543 18.6942 22.4859 19.1451C22.5175 19.596 22.5333 20.058 22.5333 20.5312ZM8.66666 3.42858C8.66666 4.375 8.32812 5.18304 7.65104 5.85268C6.97395 6.52232 6.15694 6.85714 5.2 6.85714C4.24306 6.85714 3.42605 6.52232 2.74896 5.85268C2.07188 5.18304 1.73334 4.375 1.73334 3.42858C1.73334 2.48215 2.07188 1.67411 2.74896 1.00446C3.42605 0.334821 4.24306 0 5.2 0C6.15694 0 6.97395 0.334821 7.65104 1.00446C8.32812 1.67411 8.66666 2.48215 8.66666 3.42858ZM18.2 8.57143C18.2 9.99108 17.6922 11.2031 16.6766 12.2076C15.6609 13.2121 14.4354 13.7143 13 13.7143C11.5646 13.7143 10.3391 13.2121 9.32344 12.2076C8.30781 11.2031 7.8 9.99108 7.8 8.57143C7.8 7.15179 8.30781 5.93974 9.32344 4.93528C10.3391 3.93081 11.5646 3.42858 13 3.42858C14.4354 3.42858 15.6609 3.93081 16.6766 4.93528C17.6922 5.93974 18.2 7.15179 18.2 8.57143ZM26 11.5848C26 12.2813 25.7472 12.8103 25.2417 13.1719C24.7361 13.5335 24.1132 13.7143 23.3729 13.7143H21.5583C20.6285 12.6161 19.4323 12.0446 17.9698 12C18.701 10.9554 19.0667 9.8125 19.0667 8.57143C19.0667 8.3125 19.0441 8.01786 18.999 7.68751C19.5948 7.89286 20.1951 7.99553 20.8 7.99553C21.3326 7.99553 21.8698 7.89955 22.4115 7.7076C22.9531 7.51563 23.3932 7.3259 23.7318 7.1384C24.0703 6.9509 24.2667 6.85714 24.3208 6.85714C25.4403 6.85714 26 8.43304 26 11.5848ZM24.2667 3.42858C24.2667 4.375 23.9281 5.18304 23.251 5.85268C22.574 6.52232 21.7569 6.85714 20.8 6.85714C19.8431 6.85714 19.026 6.52232 18.349 5.85268C17.6719 5.18304 17.3333 4.375 17.3333 3.42858C17.3333 2.48215 17.6719 1.67411 18.349 1.00446C19.026 0.334821 19.8431 0 20.8 0C21.7569 0 22.574 0.334821 23.251 1.00446C23.9281 1.67411 24.2667 2.48215 24.2667 3.42858Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/traningdrill"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2.5 text-base font-normal rounded-lg border-2 border-green-500 border-line "
                    : "flex items-center p-2.5 text-base font-normal  rounded-lg hover:bg-gray-500 border-dashed"
                }
              >
                <svg
                  width="27"
                  height="33"
                  viewBox="0 0 27 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0293 0C9.23365 0 8.47059 0.31607 7.90798 0.87868C7.34537 1.44129 7.0293 2.20435 7.0293 3C7.0293 3.79565 7.34537 4.55871 7.90798 5.12132C8.47059 5.68393 9.23365 6 10.0293 6C10.825 6 11.588 5.68393 12.1506 5.12132C12.7132 4.55871 13.0293 3.79565 13.0293 3C13.0293 2.20435 12.7132 1.44129 12.1506 0.87868C11.588 0.31607 10.825 0 10.0293 0V0ZM10.0153 6.957C9.9713 6.957 9.9283 6.962 9.8853 6.967C9.72997 6.98272 9.5781 7.02288 9.4353 7.086C9.4173 7.094 9.3983 7.097 9.3803 7.106L9.3143 7.136C9.23426 7.16817 9.15642 7.20558 9.0813 7.248L3.9843 9.689C3.78547 9.78403 3.61005 9.92176 3.47056 10.0924C3.33107 10.263 3.23094 10.4623 3.1773 10.676L2.0573 15.133C2.00248 15.3263 1.98702 15.5286 2.01183 15.7279C2.03664 15.9273 2.10121 16.1197 2.20173 16.2936C2.30225 16.4675 2.43666 16.6195 2.597 16.7406C2.75734 16.8616 2.94035 16.9492 3.13518 16.9982C3.33 17.0472 3.53269 17.0566 3.73121 17.0259C3.92974 16.9951 4.12007 16.9248 4.29093 16.8191C4.46178 16.7134 4.60968 16.5745 4.72587 16.4107C4.84205 16.2468 4.92415 16.0612 4.9673 15.865L5.9153 12.09L8.0293 11.078V18.314L6.1973 25.644L1.5913 29.328C1.43099 29.4489 1.29657 29.6008 1.19599 29.7746C1.09542 29.9484 1.03074 30.1406 1.00578 30.3398C0.980822 30.539 0.996095 30.7413 1.05069 30.9345C1.10529 31.1277 1.19811 31.308 1.32364 31.4648C1.44918 31.6215 1.60488 31.7514 1.78154 31.8469C1.95819 31.9423 2.1522 32.0014 2.35209 32.0205C2.55197 32.0397 2.75366 32.0185 2.94522 31.9583C3.13678 31.8981 3.31431 31.8001 3.4673 31.67L8.4673 27.67C8.7243 27.465 8.9053 27.184 8.9853 26.865L10.1723 22.113L14.0303 25.055V30.5C14.0303 30.8978 14.1883 31.2794 14.4696 31.5607C14.7509 31.842 15.1325 32 15.5303 32C15.9281 32 16.3097 31.842 16.591 31.5607C16.8723 31.2794 17.0303 30.8978 17.0303 30.5V24.312C17.0304 24.0812 16.9772 23.8534 16.8749 23.6465C16.7725 23.4396 16.6238 23.259 16.4403 23.119L12.0303 19.758V11.766L14.7003 13.707C14.9553 13.894 15.2653 13.994 15.5803 13.994L19.5273 14H19.5293C19.7263 14.0001 19.9214 13.9615 20.1034 13.8862C20.2854 13.8109 20.4509 13.7006 20.5903 13.5614C20.7296 13.4222 20.8402 13.2569 20.9157 13.0749C20.9912 12.893 21.0302 12.698 21.0303 12.501C21.0304 12.304 20.9918 12.1089 20.9165 11.9269C20.8412 11.7449 20.7309 11.5794 20.5917 11.44C20.4525 11.3007 20.2872 11.1901 20.1053 11.1146C19.9233 11.0391 19.7283 11.0001 19.5313 11L16.0703 10.994L11.5373 7.64C11.3173 7.382 11.0343 7 10.7083 7C10.6683 7 10.6283 7.024 10.5883 7.008C10.5413 6.989 10.4953 7.004 10.4473 6.99C10.3993 6.976 10.3533 6.98 10.3043 6.97C10.2593 6.962 10.2143 6.965 10.1693 6.96C10.1181 6.95633 10.0667 6.95533 10.0153 6.957ZM23.0073 24.984C22.7723 24.984 22.5463 25.012 22.3273 25.061L22.9353 25.473L23.5253 25.031C23.3543 25.0004 23.181 24.9847 23.0073 24.984ZM24.0503 25.174L23.1603 25.842L23.1853 26.826L24.1193 27.504L24.9393 27.17L25.3293 26.08C24.9901 25.6707 24.5489 25.3582 24.0503 25.174ZM21.8043 25.227C21.3133 25.435 20.8943 25.771 20.5843 26.193L21.0043 27.227L21.9043 27.498L22.7573 26.877L22.7273 25.852L21.8043 25.227ZM25.6283 26.52L25.3573 27.273L26.0053 27.781C25.9749 27.3379 25.8461 26.9071 25.6283 26.52ZM20.3063 26.652C20.1293 27.0167 20.0272 27.4132 20.0063 27.818L20.5873 27.346L20.3073 26.652H20.3063ZM23.0073 27.227L22.1933 27.818L22.4883 28.778H23.4983L23.8183 27.816L23.0083 27.226L23.0073 27.227ZM25.0583 27.586L24.2363 27.92L23.8843 28.973L24.2383 29.629L25.4473 29.746H25.4493C25.7453 29.336 25.9403 28.849 25.9973 28.32L25.0583 27.586ZM20.9023 27.645L20.0213 28.359C20.0723 28.779 20.2113 29.171 20.4173 29.519H21.6073L22.0833 28.924L21.7713 27.908L20.9013 27.645H20.9023ZM22.4083 29.207L21.9553 29.773L22.3063 30.916C22.5313 30.97 22.7663 31.002 23.0073 31.002C23.1373 31.002 23.2613 30.992 23.3873 30.977C23.3893 30.964 23.3853 30.951 23.3903 30.939L23.8653 29.842L23.5233 29.207H22.4073H22.4083ZM20.7243 29.949C21.0183 30.291 21.3863 30.567 21.8043 30.75L21.5583 29.95H20.7243V29.949ZM24.2383 30.061L23.8883 30.871C23.9792 30.8426 24.0686 30.8099 24.1563 30.773L24.8333 30.379C24.9293 30.306 25.0213 30.229 25.1073 30.145L24.2373 30.061H24.2383Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
            </li>

            <li onClick={() => setdrop(false)}>
              <NavLink
                to={"/newsfeed"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2.5 text-base font-normal rounded-lg border-2 border-green-500 border-line "
                    : "flex items-center p-2.5 text-base font-normal  rounded-lg hover:bg-gray-500 border-dashed"
                }
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.87102 16.9609C5.65632 16.9609 7.14408 18.4487 7.14408 19.9364C7.14408 21.7218 5.65632 23.2095 3.87102 23.2095C2.38326 23.2095 0.895508 21.7218 0.895508 19.9364C0.895508 18.4487 2.38326 16.9609 3.87102 16.9609Z"
                    fill="white"
                  />
                  <path
                    d="M0.895508 12.1996C3.87102 12.1996 6.54897 13.3898 8.63183 15.4727C10.4171 17.5555 11.6073 20.2335 11.6073 23.209H16.0706C16.0706 14.58 9.22693 7.73633 0.895508 7.73633V12.1996Z"
                    fill="white"
                  />
                  <path
                    d="M0.895508 4.46326C11.3098 4.46326 19.6412 12.7947 19.6412 23.209H24.1045C24.1045 10.4143 13.6902 0 0.895508 0V4.46326Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
            </li>

            <li onClick={() => setdrop(false)}>
              <NavLink
                to={"/chat"}
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2.5 text-base font-normal rounded-lg border-2 border-green-500 border-line "
                    : "flex items-center p-2.5 text-base font-normal  rounded-lg hover:bg-gray-500 border-dashed"
                }
              >
                <svg
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.3 0.0273438H2.7C1.20825 0.0273438 0.0135 1.23559 0.0135 2.72734L0 27.0273L5.4 21.6273H24.3C25.7917 21.6273 27 20.4191 27 18.9273V2.72734C27 1.23559 25.7917 0.0273438 24.3 0.0273438ZM5.4 9.47734H21.6V12.1773H5.4V9.47734ZM16.2 16.2273H5.4V13.5273H16.2V16.2273ZM21.6 8.12734H5.4V5.42734H21.6V8.12734Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
            </li>
            <li className="isDisabled" onClick={() => setdrop(false)}>
              <NavLink
                to="/addskillpage2"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2.5 text-base font-normal rounded-lg border-2 border-green-500 border-line "
                    : "flex items-center p-2.5 text-base font-normal  rounded-lg hover:bg-gray-500 border-dashed"
                }
              >
                <svg
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.4329 15.0593C23.4864 14.6273 23.5265 14.1953 23.5265 13.7363C23.5265 13.2773 23.4864 12.8453 23.4329 12.4133L26.2529 10.1858C26.5068 9.98333 26.5736 9.61883 26.4132 9.32183L23.7403 4.65083C23.5799 4.35383 23.2191 4.24583 22.9251 4.35383L19.5973 5.70383C18.9023 5.16383 18.1539 4.71833 17.3386 4.38083L16.8308 0.803328C16.7907 0.479328 16.51 0.236328 16.1759 0.236328H10.83C10.4959 0.236328 10.2152 0.479328 10.1751 0.803328L9.66728 4.38083C8.85204 4.71833 8.10362 5.17733 7.40865 5.70383L4.08084 4.35383C3.77346 4.23233 3.42597 4.35383 3.2656 4.65083L0.592659 9.32183C0.418919 9.61883 0.499107 9.98333 0.753036 10.1858L3.57299 12.4133C3.51953 12.8453 3.47943 13.2908 3.47943 13.7363C3.47943 14.1818 3.51953 14.6273 3.57299 15.0593L0.753036 17.2868C0.499107 17.4893 0.432283 17.8538 0.592659 18.1508L3.2656 22.8218C3.42597 23.1188 3.78682 23.2268 4.08084 23.1188L7.40865 21.7688C8.10362 22.3088 8.85204 22.7543 9.66728 23.0918L10.1751 26.6693C10.2152 26.9933 10.4959 27.2363 10.83 27.2363H16.1759C16.51 27.2363 16.7907 26.9933 16.8308 26.6693L17.3386 23.0918C18.1539 22.7543 18.9023 22.2953 19.5973 21.7688L22.9251 23.1188C23.2324 23.2403 23.5799 23.1188 23.7403 22.8218L26.4132 18.1508C26.5736 17.8538 26.5068 17.4893 26.2529 17.2868L23.4329 15.0593ZM13.503 18.4613C10.9236 18.4613 8.82531 16.3418 8.82531 13.7363C8.82531 11.1308 10.9236 9.01133 13.503 9.01133C16.0823 9.01133 18.1806 11.1308 18.1806 13.7363C18.1806 16.3418 16.0823 18.4613 13.503 18.4613Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
            </li>
            <li onClick={() => setdrop(false)}>
              <NavLink to={"/"} className="flex items-center p-2.5 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.8914 11.95C24.7465 11.8125 24.7465 11.675 24.6017 11.5375L20.2563 7.4125C19.6769 6.8625 18.8078 6.8625 18.2284 7.4125C17.649 7.9625 17.649 8.7875 18.2284 9.3375L20.1114 11.125H13.4485C12.5794 11.125 12 11.675 12 12.5C12 13.325 12.5794 13.875 13.4485 13.875H20.1114L18.2284 15.6625C17.649 16.2125 17.649 17.0375 18.2284 17.5875C18.5181 17.8625 18.9526 18 19.2423 18C19.532 18 19.9666 17.8625 20.2563 17.5875L24.6017 13.4625C24.7465 13.325 24.8914 13.1875 24.8914 13.05C25.0362 12.6375 25.0362 12.3625 24.8914 11.95Z"
                    fill="white"
                  />
                  <path
                    d="M17.8051 20.9722C16.2382 21.8056 14.5289 22.2222 12.8196 22.2222C7.26446 22.2222 2.84881 17.9167 2.84881 12.5C2.84881 7.08333 7.26446 2.77778 12.8196 2.77778C14.5289 2.77778 16.2382 3.19444 17.8051 4.02778C18.5173 4.44444 19.3719 4.16667 19.7992 3.47222C20.2265 2.77778 19.9417 1.94444 19.2295 1.52778C17.2353 0.555555 15.0987 0 12.8196 0C5.69762 0 0 5.55556 0 12.5C0 19.4444 5.69762 25 12.8196 25C15.0987 25 17.2353 24.4444 19.2295 23.3333C19.9417 22.9167 20.0841 22.0833 19.7992 21.3889C19.3719 20.8333 18.5173 20.5556 17.8051 20.9722Z"
                    fill="white"
                  />
                </svg>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}