interface BadgeMedaliProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

const BadgeMedali: React.FC<BadgeMedaliProps> = ({
  width = 44,
  height = 40,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 44 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect y="0.177246" width="44" height="39" fill="url(#pattern0_2946_2205)" />
    <defs>
      <pattern
        id="pattern0_2946_2205"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_2946_2205" transform="scale(0.01 0.0113636)" />
      </pattern>
      <image
        id="image0_2946_2205"
        width="100"
        height="100"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJyElEQVR4nO1dbVBU1xl+USBidDRWTSB+7sKyS5yoYzpNMm3SaXXUuFNbwU4aq0A0Quq0nWntj/7K1EgznU4nTWaaNcRpp01ApYX9Ao1aRU2URdkVKFHYvQuK1TRGY7WKIQJP5+xe3GU/7r27LO7l7n1mnj/Lcu8573Oe856ve5dIhQoVKlSoUKFCxThH4Ru0tKiCqosq6LAIbYUV9AqB0hJdhtdAE3Y5aKvJQTaTgw4LcZeDPvhTEz1JSsSLv6Ocwp3036IKglQW7qS3E10Ok4Pe2dVMiIFfvNdEj5LSwFp8LGIUMe6koR+8QYsTVYZ3TtNSk4OGYhQE7zZTMSkN639L34tZkAqfKLWJKoOpmcyxisFoaqIXSGlYX0MTiyrInSyXVDbTknjcYXIQ91ojpZMSUbiTXk6WS0zxuqOZSkipSJZLKlV3yMslJtUd8nFJpeoOebnEpLpDPi6pVN0hL5eYVHfIxyWVqjvk5RKT6g75uKRSdYe8XGJS3SEfl1Sq7pCXS0yqO+TjkkrVHfJyiUl1h3xcUqm6Q14uManukI9LSt+iIXU3UEYu2VEf+06g4ncDk+WS0rd9gY1dDCXvlSfTJTtUd8jHJaWqO+Tlkh2qO+TjklLVHfJyyQ7VHfJxSanqDnm55M0Ps7DflYOTbQacaV+M1vZlPra0L/V91uDKwd9OZ6nzjrFySfHvM7jd+/Q4c2w5bp7bBHhflcQ77o3o+eS7OH52AXY7JnjVeccogXMbnoa71DLg2dovVYSI/GQVBpz6u3Dp/4xW/aLENJUUAs4XL4Nn83Fwrw6NSghGrhxoXQa4DH46DUNw6s1oy89Pdj1lD7QYJ8NdWgmu7N6ohRjm+XUBMYLp1PfDqa9A4/xJya63LIGe4iVwv+JJmBCM7hLg7JORBQkI44LLkJfs+ssK6NzwQ3jK+kYE8+KvgVungLte4FpNHGL8GGhdKixGgDfh0q9IdhxkAXQWbwvroq7+FRjswwiwz6QI4SkBOlYAriekihHchb1IqQx0lRSDKx+4H8zunwO3zyIibjUFgn5uA+B4BjiiAw7kAPWzgPqvAftnAodmAcfnAGd0sQni5wCc+YWUigD30mp4ywPD2Z5fAHc9iIrP3gdOLAbMU4Aqksa6LODoY0BLfiyi9MGpf4ZSCeha/zi4ss8DYmwHvuyNosQQcOkvwL5M6UKEcl86cOTRWLqvS2jRzaRUAdxbPg70+z8B7nRE1qL/M+Cj1fELEcraSYBDK1UYG6UCcH5T2YgkfONAlJzRCtQ+kjgxhrlnAnBinlSnrCMlA+dfnjqiq7rylr9LCsWNU8C+yYkXY5jVaf7ELyqKvhen5mSRUoGukh0Bd2wD+i+Hi9HXDex7OLYAs+TdMN3fJcUiyskF4qK06LeREoGO9Zngtl69L8jnVeFiDNwGGnTSg2qeDJxaODKAtQ/FkOwzJAyP9RfRsiyDlAZwxSUjEvm9G+GC/Gu79FFTY07kADZMi81d9dOluMRISgPcm48GJoA/C88dd3uA6oniAdz/iHCrZl1XrDkl1GUh/Oq0voYUt4rLBU0CGW+3BakxCDR9XzxwbBYu1prjEcQ2New6Q04DvjimQ099Lrosmj50FGSSUgDPS2vD1pzYMsl1C3DzOHDhdWmBOxmShCM5JR5Bqglozgt2BC405KLLrL3PSwd13yGlAF3FfxRcEDxWIC1wB2bw8wMDcDTbn0sSIQjjP/0z+YEWA7rtI8Vg7GnIfZ2UAng2HxQUxBbDBLB2ElCTwbfstMQJwndblw/mhYnB6DZr60gpgHuLW1CQvenxBbE6gYLsTceXDn1EMXyCWLXtpBSAK7seVYzO4vgCWJVgQaoI146Ed1XD7KzT/oeUAnAhu4HBbF8nG0E+bZgvIIjmNikF4MoHowrSZpSNIJdt86ILYtEOkFIArjy6Q9rWyEaQXmt0h3QpyyECOaR9hWwE8VoWCgiipBwiNMpq+7p/PpFsQfamRxdDcaMsz5bI85DOQn8QrVOSLsg98xRBQTwWbcJe6Jx0wLPpzYjHdYYPsbFZcpIFuWWfJSgIZ83dSUoBPBvXhh9iWxII4uk8aYH7e6Z/2f2jeX5+HGErtkkT+Puxx4F/SNsfuWATyB9mLbyWvOWkFKB3fRa4sn64i4GO5YCrIDyQbOmiSiRwkrZdQ8iEEe2upgqK0WXW9Ln35z5ESgJal9QJBo6t5FaJCHJibhyCzBe97hXbXJGErrGS0gCXYa34XsY08b1zJlxzrjSy77JtXoFr9lumibhDC69tofJOM7J9ad8pDiFBzuj8+9zxJPg4OFSTgW6rcO5wWzT/bnlXgXvqDHAW/FTUJScX+EdPYy1IdRo+tc8RdYfHrv0lKRXsjJOoS1wGf/IeS1Gq03DNliMqBnNHb42Cz2UxwFVQJHl0tGdC4sXYMwFXJYjhm3vYNanxeAI7NytJFIc2tsNvIhysnYRLQguII0dWH1KqAB0FM+DSX5A8dD3yWPzrXYx703HLNluSED5aNFe81oXK+2U2IbBnMHzPYkgVxakHjmQD5iz/KRHRPMEckYWbttnwWDSSxeg0a/q89rxvUSqCnQiES38v5sneGZ0/8R+ehUH7dAxYpvpm2/2W6bhjm4nr9mzR4WxkZ2gHeqyaH1Eqgz3X53u+LwZBhvhDbN4Ix3Xip+Yrrk6jvN8rjAfsCVj/k7AGUTEiHWJLgBi3OHue8n6rcDTA2fwFcOqbhcSIdohtlGJ09Nh0+mTXX5ZA4/xJvrcrROnCrhzKS6QQ/W6r5g896pscJAjTlp8Pl6EOTsPgsBj9zdEPscXCTrN20G3V1rstuQUPoI0pCzhreAJO/W6WX6416kbriP95rNoPuu15Cfux45QFTs3JunJIt9Fr11Zx1tzeGIaxFz1WbRUbPV22ZU9Odj0Ui8uNupnuutznOZumvKtO8yuPWfsbH23a7ZxNU9Zdn/ece3/urGSXU4UKFamENCJiO3VsP2IKEU0jopk8s0M4h2fo58Pfn8ZfI4u/Jru2iiBk8EFiQdMSEXsP4lNE9CwRfZuIVhKRcYy5kr/Xs/y9F/FlyebLpsxtWyLK5CvJZsPfIKIVDyDYxgRxBV9mPV+HcSvSRCJayLe+NTIIrDFBXMPXaQFfx3GBGePMBcY4uZyvq+yxSAbBMj4gjot3ALNfrWHrRKtlEDDjGHE1X8f08ZbM5xLRsgc0ajKOMVfydWF1UsRbHR4OGm2xYeZzRLRKBoE2hnAVX7angkZXrOwpg0x+3D+bn9yxuQDrDpbwLfJpIvomET1PROz1FqylBjNSSw4m+x/2v+wa7Frsmuza7B7sXuye7N6sDElv+f8HbaNSiJnbR8wAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export default BadgeMedali;
