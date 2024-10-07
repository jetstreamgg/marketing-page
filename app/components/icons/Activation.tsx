import { IconProps } from './Icon';
import { IconVariantEnum, VariantIcon } from './VariantIcon';

export const Activation = ({
  variant = IconVariantEnum.mono,
  ...props
}: IconProps & { variant?: IconVariantEnum }) => {
  return (
    <VariantIcon
      {...props}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      variant={variant}
      monoIcon={
        <>
          <path
            d="M37.3205 30.0002C39.0759 26.9599 40 23.511 40 20.0004C40 16.4897 39.0759 13.0409 37.3205 10.0006C35.5651 6.96022 33.0404 4.43551 30 2.68017C26.9596 0.924839 23.5107 0.000730894 20 0.000731211L20 10.0006C21.7554 10.0006 23.4798 10.4626 25 11.3403C26.5202 12.2179 27.7826 13.4803 28.6603 15.0005C29.5379 16.5206 30 18.245 30 20.0004C30 21.7557 29.5379 23.4801 28.6603 25.0003L37.3205 30.0002Z"
            fill="white"
          />
          <path
            d="M20 40C23.5107 40 26.9596 39.0759 30 37.3206L25 28.6605C23.4798 29.5381 21.7554 30.0002 20 30.0002L20 40Z"
            fill="white"
          />
          <path
            d="M-1.42072e-06 19.9996C-1.26547e-06 22.626 0.517314 25.2267 1.52241 27.6532C2.5275 30.0796 4.00069 32.2844 5.85786 34.1415C7.71504 35.9986 9.91982 37.4718 12.3463 38.4769C14.7728 39.482 17.3736 39.9993 20 39.9993L20 29.9994C18.6868 29.9994 17.3864 29.7408 16.1732 29.2383C14.9599 28.7357 13.8575 27.9991 12.9289 27.0706C12.0003 26.142 11.2637 25.0396 10.7612 23.8264C10.2587 22.6132 10 21.3128 10 19.9996L-1.42072e-06 19.9996Z"
            fill="white"
          />
          <path
            d="M2.67949 9.99981C0.924123 13.0401 -1.62825e-06 16.489 -1.42072e-06 19.9996L10 19.9996C10 18.2443 10.4621 16.5199 11.3397 14.9997L2.67949 9.99981Z"
            fill="url(#paint0_radial_875_45620)"
          />
          <path
            d="M2.67949 9.99981C0.924123 13.0401 -1.62825e-06 16.489 -1.42072e-06 19.9996L10 19.9996C10 18.2443 10.4621 16.5199 11.3397 14.9997L2.67949 9.99981Z"
            fill="white"
          />
          <path
            d="M20 -1.57967e-05C16.4893 -1.57023e-05 13.0404 0.924093 10 2.67943L15 11.3395C16.5202 10.4619 18.2446 9.9998 20 9.9998L20 -1.57967e-05Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_875_45620"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(20 19.9996) rotate(-15.0033) scale(21.3647 21.3644)"
            >
              <stop stopColor="#F2A4FF" />
              <stop offset="1" stopColor="#5200FF" />
            </radialGradient>
          </defs>
        </>
      }
      colorIcon={
        <>
          <path
            d="M37.3205 29.9999C39.0759 26.9596 40 23.5108 40 20.0001C40 16.4895 39.0759 13.0406 37.3205 10.0003C35.5651 6.95998 33.0404 4.43527 30 2.67993C26.9596 0.924595 23.5107 0.000486753 20 0.000487071L20 10.0003C21.7554 10.0003 23.4798 10.4624 25 11.34C26.5202 12.2177 27.7826 13.4801 28.6603 15.0002C29.5379 16.5204 30 18.2448 30 20.0001C30 21.7555 29.5379 23.4799 28.6603 25L37.3205 29.9999Z"
            fill="url(#paint0_radial_875_45660)"
          />
          <path
            d="M20 39.9998C23.5107 39.9998 26.9596 39.0757 30 37.3203L25 28.6602C23.4798 29.5379 21.7554 29.9999 20 29.9999L20 39.9998Z"
            fill="url(#paint1_radial_875_45660)"
          />
          <path
            d="M-1.42072e-06 19.9994C-1.26547e-06 22.6258 0.517314 25.2264 1.52241 27.6529C2.5275 30.0794 4.00069 32.2841 5.85786 34.1413C7.71504 35.9984 9.91982 37.4716 12.3463 38.4766C14.7728 39.4817 17.3736 39.999 20 39.999L20 29.9992C18.6868 29.9992 17.3864 29.7405 16.1732 29.238C14.9599 28.7355 13.8575 27.9989 12.9289 27.0703C12.0003 26.1418 11.2637 25.0394 10.7612 23.8261C10.2587 22.6129 10 21.3126 10 19.9994L-1.42072e-06 19.9994Z"
            fill="url(#paint2_radial_875_45660)"
          />
          <path
            d="M2.67949 9.99956C0.924123 13.0399 -1.62825e-06 16.4887 -1.42072e-06 19.9994L10 19.9994C10 18.244 10.4621 16.5196 11.3397 14.9995L2.67949 9.99956Z"
            fill="url(#paint3_radial_875_45660)"
          />
          <path
            d="M2.67949 9.99956C0.924123 13.0399 -1.62825e-06 16.4887 -1.42072e-06 19.9994L10 19.9994C10 18.244 10.4621 16.5196 11.3397 14.9995L2.67949 9.99956Z"
            fill="url(#paint4_radial_875_45660)"
          />
          <path
            d="M20 -0.000259937C16.4893 -0.000259843 13.0404 0.923849 10 2.67918L15 11.3393C16.5202 10.4616 18.2446 9.99956 20 9.99956L20 -0.000259937Z"
            fill="url(#paint5_linear_875_45660)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_875_45660"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(18.6865 21.3943) rotate(-30.1237) scale(23.0268 21.5109)"
            >
              <stop stopColor="#F2A4FF" />
              <stop offset="1" stopColor="#6D28FF" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_875_45660"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(22.129 25.8202) rotate(77.8447) scale(16.3488 344.132)"
            >
              <stop stopColor="#FFCD6B" />
              <stop offset="1" stopColor="#EA5DD3" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_875_45660"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(20 19.9994) rotate(132.663) scale(25.0219 25.0219)"
            >
              <stop stopColor="#00DDFB" />
              <stop offset="1" stopColor="#0075FF" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_875_45660"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(20 19.9994) rotate(-15.0033) scale(21.3647 21.3644)"
            >
              <stop stopColor="#F2A4FF" />
              <stop offset="1" stopColor="#5200FF" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_875_45660"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(21.3135 18.6052) rotate(149.876) scale(23.0268 21.5109)"
            >
              <stop stopColor="#F2A4FF" />
              <stop offset="1" stopColor="#6D28FF" />
            </radialGradient>
            <linearGradient
              id="paint5_linear_875_45660"
              x1="17.703"
              y1="13.2801"
              x2="16.2277"
              y2="-1.71862"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD2B9" />
              <stop offset="1" stopColor="#FF6D6D" />
            </linearGradient>
          </defs>
        </>
      }
    />
  );
};
