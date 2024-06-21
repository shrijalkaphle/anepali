import Link from "next/link";
import { Input } from "./Input";

interface INavbar {
    fontSearchChange?: (e: any) => void;
    fontSearch?: string;
}

export const Navbar = ({ fontSearch, fontSearchChange }: INavbar) => {
    return (
        <nav className="fixed inset-x-0 top-0 z-50">
            <div className="py-4 blur-container w-full h-full relative">
                <div className="container lg:flex justify-between items-center z-10">
                    <Link href={"/"}>
                        {/* <img src="/logo.svg" alt="logo" className="h-10" /> */}
                        <svg width="149" height="32" viewBox="0 0 149 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H24.32C28.56 0 32 3.44 32 7.68V32H11.52C5.1584 32 0 26.8416 0 20.48V0Z" fill="url(#paint0_linear_223_519)" />
                            <path d="M27.7664 8.0864V10.8832H24.8801V26.4H21.5233V18.608C21.2961 18.6784 21.0721 18.7328 20.8481 18.7744C20.2209 18.8928 19.5425 18.9504 18.8161 18.9504C18.5569 18.9504 18.2785 18.9408 17.9841 18.9184C18.0865 19.3024 18.1377 19.696 18.1377 20.0992C18.1377 21.0208 17.9329 21.808 17.5201 22.4544C17.1073 23.1008 16.5185 23.5936 15.7537 23.9264C15.0081 24.24 14.1057 24.3968 13.0465 24.3968C11.8689 24.3968 10.7585 24.1536 9.71845 23.6608C8.69765 23.152 7.72805 22.288 6.80325 21.072C5.88165 19.8528 4.96005 18.1856 4.03845 16.0672L6.95045 14.976C7.50085 16.3712 8.07045 17.5584 8.65925 18.5376C9.26725 19.52 9.90405 20.2656 10.5729 20.7776C11.2609 21.2864 12.0065 21.5424 12.8097 21.5424C13.4369 21.5424 13.9297 21.3856 14.2817 21.072C14.6369 20.7584 14.8129 20.2848 14.8129 19.6576C14.8129 18.7936 14.5569 18.0576 14.0481 17.4496C13.8721 17.232 13.6705 17.0176 13.4433 16.8096C12.8257 16.9408 12.1441 17.0176 11.3985 17.0368L11.2193 14.3296C12.4577 14.2688 13.3121 14.064 13.7825 13.712C14.2529 13.3376 14.4897 12.8384 14.4897 12.208C14.4897 11.5776 14.2721 11.1776 13.8401 10.944C13.4273 10.7072 12.9569 10.5888 12.4289 10.5888C11.7601 10.5888 11.1425 10.688 10.5729 10.8832C10.0033 11.0624 9.43365 11.296 8.86405 11.5904L7.89445 8.9696C8.44485 8.6976 9.13925 8.432 9.98405 8.176C10.8289 7.92 11.7601 7.792 12.7809 7.792C14.4097 7.792 15.6449 8.2048 16.4897 9.0304C17.3537 9.8528 17.7857 10.896 17.7857 12.1504C17.7857 13.072 17.5393 13.8976 17.0497 14.624C16.7969 15.0144 16.4737 15.36 16.0801 15.664C16.1985 15.7792 16.3137 15.9008 16.4321 16.032C16.5185 16.0448 16.6081 16.0576 16.6977 16.0672C17.2065 16.1248 17.7665 16.1536 18.3745 16.1536C19.2577 16.1536 20.0321 16.0864 20.7009 15.9488C20.9665 15.8944 21.2417 15.8208 21.5233 15.7312V10.8832H19.5521V8.0864H27.7664Z" fill="white" />
                            <path d="M100.883 8.88C100.579 7.7504 100.23 6.7392 99.8368 5.8432C99.4592 4.928 99.0016 4.1504 98.464 3.504C97.9264 2.8576 97.2896 2.3648 96.5568 2.0256C95.84 1.6864 94.9888 1.5136 94.0032 1.5136C92.5152 1.5136 91.3408 1.9008 90.48 2.672C89.6224 3.44 89.1904 4.464 89.1904 5.7344C89.1904 6.256 89.264 6.784 89.4048 7.3216C89.5328 7.8048 89.7376 8.3232 90.0096 8.88H51.6192C51.2064 7.408 50.784 6.1952 50.3552 5.2512C49.9072 4.2656 49.4336 3.504 48.9312 2.9664C48.4288 2.4288 47.8816 2.0512 47.2896 1.8368C46.6816 1.6224 46.0192 1.5136 45.3024 1.5136C44.7648 1.5136 44.288 1.552 43.8784 1.6224C43.4464 1.6928 43.0272 1.8208 42.6144 2L43.4464 4.4992C43.6992 4.4096 43.984 4.3296 44.3072 4.256C44.6112 4.1664 44.944 4.1216 45.3024 4.1216C45.9104 4.1216 46.4224 4.2848 46.8352 4.6048C47.2448 4.928 47.6128 5.456 47.936 6.192C48.2432 6.8704 48.5472 7.7664 48.8512 8.88H38.4V11.4336H49.072V15.5744H41.088C40.3712 15.5744 39.888 15.7344 39.6352 16.0576C39.4048 16.3808 39.2864 16.7648 39.2864 17.2128C39.2864 17.6064 39.4048 18.0288 39.6352 18.4768C39.888 18.9056 40.192 19.3088 40.5504 19.6864C40.928 20.0608 41.3312 20.368 41.76 20.5984C42.1888 20.832 42.592 20.9504 42.9696 20.9504C43.472 20.9504 43.8656 20.8064 44.1536 20.5184C44.4384 20.2336 44.5824 19.7664 44.5824 19.12V18.1536H49.072V25.6H52.1344V11.4336H55.7568V16.192C55.7568 16.9792 55.8016 17.6512 55.8912 18.208C55.9808 18.7456 56.1248 19.2096 56.3232 19.6064C56.5184 19.9808 56.7712 20.3392 57.0752 20.6816C57.4528 21.056 57.936 21.3696 58.528 21.6224C59.136 21.872 59.8336 21.9968 60.624 21.9968C61.3056 21.9968 61.904 21.9424 62.4256 21.8368C62.944 21.728 63.4368 21.5584 63.904 21.3248C64.1152 21.2224 64.3296 21.1104 64.5472 20.9856V25.6H67.6128V11.4336H71.7984V25.6H74.8608V11.4336H90.7808V14.1792C90.736 14.176 90.6912 14.176 90.6464 14.176C89.1232 14.176 87.824 14.624 86.7488 15.52C86.7232 15.5392 86.6976 15.5616 86.6752 15.584C86.352 15.344 86.0256 15.1328 85.7024 14.9536C85.216 14.6848 84.7072 14.4896 84.1696 14.3648C83.648 14.2208 83.0592 14.1472 82.3936 14.1472C81.8944 14.1472 81.3824 14.2304 80.864 14.3904C80.3424 14.5344 79.8592 14.7744 79.4112 15.1168C78.9632 15.44 78.6048 15.8688 78.336 16.4064C78.0672 16.944 77.9328 17.5968 77.9328 18.368C77.9328 19.248 78.1472 20.0896 78.5792 20.896C79.008 21.6832 79.6352 22.4896 80.4608 23.3152C81.2832 24.1376 82.2784 25.0336 83.4432 26.0032L85.4592 23.9872C84.4192 23.1616 83.568 22.4544 82.9056 21.8624C82.2592 21.2544 81.776 20.688 81.4528 20.1696C81.1488 19.6512 80.9984 19.12 80.9984 18.5824C80.9984 18.0448 81.1584 17.616 81.4816 17.2928C81.8208 16.9536 82.304 16.784 82.9312 16.784C83.6128 16.784 84.2048 16.9792 84.7072 17.3728C84.8352 17.4688 84.9632 17.568 85.0912 17.6736C84.832 18.2112 84.6144 18.8096 84.4384 19.472L87.3152 20.3584C87.6 19.3536 87.9328 18.592 88.3072 18.0736C88.6848 17.536 89.0784 17.168 89.4912 16.9696C89.92 16.7744 90.3328 16.6752 90.7264 16.6752C90.7456 16.6752 90.7616 16.6752 90.7808 16.6784V25.6H93.8464V11.4336H98.0352V25.6H101.098V11.4336H103.734V8.88H100.883ZM64.5472 17.8368C64.4224 17.9616 64.2784 18.096 64.1184 18.2336C63.7408 18.5568 63.3024 18.8448 62.8 19.0944C62.2976 19.328 61.76 19.4432 61.1872 19.4432C60.7936 19.4432 60.4608 19.3984 60.192 19.3088C59.9232 19.2192 59.6992 19.0848 59.52 18.9056C59.36 18.7456 59.2256 18.5568 59.1168 18.3424C59.0112 18.1088 58.9312 17.8144 58.8768 17.456C58.8416 17.0784 58.8224 16.576 58.8224 15.9488V11.4336H64.5472V17.8368ZM92.9632 8.88C92.7872 8.5024 92.6336 8.128 92.496 7.7504C92.336 7.2864 92.256 6.7648 92.256 6.192C92.256 5.5456 92.4256 5.0368 92.7648 4.6592C93.1072 4.2656 93.616 4.0672 94.2976 4.0672C94.9088 4.0672 95.4368 4.2464 95.8848 4.6048C96.3328 4.9632 96.736 5.5008 97.0944 6.2176C97.4528 6.9184 97.792 7.8048 98.1152 8.88H92.9632Z" fill="black" />
                            <path d="M114.44 16.7899V20.1219L114.188 19.8839C114.449 19.5759 114.734 19.3379 115.042 19.1699C115.35 19.0019 115.7 18.9179 116.092 18.9179C116.699 18.9179 117.193 19.1139 117.576 19.5059C117.959 19.8886 118.15 20.4392 118.15 21.1579C118.15 21.5872 118.08 22.0446 117.94 22.5299C117.8 23.0152 117.567 23.4912 117.24 23.9579L116.232 23.3839C116.465 23.0852 116.657 22.7399 116.806 22.3479C116.955 21.9559 117.03 21.5686 117.03 21.1859C117.03 20.7472 116.937 20.4206 116.75 20.2059C116.563 19.9912 116.307 19.8839 115.98 19.8839C115.793 19.8839 115.597 19.9399 115.392 20.0519C115.187 20.1546 114.981 20.3132 114.776 20.5279C114.571 20.7332 114.365 20.9852 114.16 21.2839L114.44 20.4019V24.5039H113.306V21.2979L113.53 21.6199C113.297 21.8252 113.012 22.0166 112.676 22.1939C112.349 22.3712 111.948 22.4599 111.472 22.4599C111.099 22.4599 110.763 22.3946 110.464 22.2639C110.165 22.1239 109.927 21.9512 109.75 21.7459C109.601 21.5686 109.475 21.3772 109.372 21.1719C109.279 20.9666 109.209 20.7332 109.162 20.4719C109.125 20.2106 109.106 19.9026 109.106 19.5479V16.7899H108V15.7959H119.004V16.7899H114.44ZM110.24 16.7899V19.4639C110.24 19.9772 110.268 20.3459 110.324 20.5699C110.38 20.7939 110.483 20.9852 110.632 21.1439C110.735 21.2559 110.856 21.3399 110.996 21.3959C111.136 21.4426 111.295 21.4659 111.472 21.4659C111.78 21.4659 112.055 21.4192 112.298 21.3259C112.541 21.2232 112.765 21.0879 112.97 20.9199C113.185 20.7426 113.381 20.5512 113.558 20.3459L113.306 21.1019V16.7899H110.24ZM121.517 20.3319V21.0879C121.517 21.3492 121.451 21.5452 121.321 21.6759C121.19 21.8066 121.017 21.8719 120.803 21.8719C120.635 21.8719 120.453 21.8159 120.257 21.7039C120.07 21.5919 119.893 21.4426 119.725 21.2559C119.566 21.0692 119.435 20.8732 119.333 20.6679C119.23 20.4532 119.179 20.2479 119.179 20.0519C119.179 19.8372 119.239 19.6646 119.361 19.5339C119.491 19.4032 119.715 19.3379 120.033 19.3379H124.051V20.3319H121.517ZM118.661 15.7959H123.883V16.7899H118.661V15.7959ZM130.189 16.7899H128.117V19.6179H127.347C126.899 19.6179 126.526 19.6552 126.227 19.7299C125.928 19.8046 125.672 19.9119 125.457 20.0519C125.214 20.2199 125.023 20.4252 124.883 20.6679C124.752 20.9106 124.687 21.1859 124.687 21.4939C124.687 21.9419 124.79 22.3152 124.995 22.6139C125.2 22.9032 125.466 23.1179 125.793 23.2579C126.129 23.3979 126.493 23.4679 126.885 23.4679C127.389 23.4679 127.818 23.4119 128.173 23.2999C128.528 23.1786 128.901 23.0152 129.293 22.8099L129.671 23.8459C129.26 24.0326 128.822 24.1912 128.355 24.3219C127.898 24.4432 127.422 24.5039 126.927 24.5039C126.283 24.5039 125.704 24.3826 125.191 24.1399C124.687 23.8972 124.29 23.5472 124.001 23.0899C123.712 22.6326 123.567 22.0772 123.567 21.4239C123.567 20.8172 123.726 20.3086 124.043 19.8979C124.36 19.4779 124.776 19.1606 125.289 18.9459C125.812 18.7312 126.367 18.6239 126.955 18.6239H127.025L126.983 18.6799V16.7899H122.923V15.7959H130.189V16.7899ZM131.756 21.2979C131.522 21.1299 131.303 20.9059 131.098 20.6259C130.902 20.3366 130.804 19.9866 130.804 19.5759C130.804 19.3146 130.85 19.0906 130.944 18.9039C131.037 18.7172 131.163 18.5632 131.322 18.4419C131.462 18.3299 131.616 18.2412 131.784 18.1759C131.952 18.1106 132.138 18.0639 132.344 18.0359C132.558 18.0079 132.792 17.9939 133.044 17.9939H134.892V16.7899H129.838V15.7959H137.482V16.7899H136.026V18.9879H133.058C132.768 18.9879 132.563 19.0019 132.442 19.0299C132.32 19.0579 132.218 19.1046 132.134 19.1699C132.068 19.2259 132.017 19.2959 131.98 19.3799C131.942 19.4546 131.924 19.5432 131.924 19.6459C131.924 19.8699 131.989 20.0659 132.12 20.2339C132.26 20.4019 132.418 20.5466 132.596 20.6679L131.756 21.2979ZM134.332 23.5379C134.668 23.4352 134.943 23.2999 135.158 23.1319C135.372 22.9639 135.48 22.7306 135.48 22.4319C135.48 22.0772 135.344 21.8019 135.074 21.6059C134.803 21.4006 134.364 21.2979 133.758 21.2979C133.114 21.2979 132.619 21.4332 132.274 21.7039C131.938 21.9652 131.77 22.3199 131.77 22.7679C131.77 22.9826 131.798 23.1926 131.854 23.3979C131.91 23.5939 132.017 23.8039 132.176 24.0279C132.334 24.2519 132.563 24.5039 132.862 24.7839C133.17 25.0639 133.571 25.3859 134.066 25.7499L133.31 26.4919C132.74 26.0439 132.255 25.6192 131.854 25.2179C131.462 24.8259 131.163 24.4246 130.958 24.0139C130.752 23.6032 130.65 23.1599 130.65 22.6839C130.65 22.1612 130.799 21.7226 131.098 21.3679C131.406 21.0132 131.798 20.7472 132.274 20.5699C132.759 20.3926 133.272 20.3039 133.814 20.3039C134.458 20.3039 134.98 20.4019 135.382 20.5979C135.792 20.7939 136.091 21.0506 136.278 21.3679C136.474 21.6759 136.572 22.0072 136.572 22.3619C136.572 22.9032 136.413 23.3512 136.096 23.7059C135.778 24.0606 135.316 24.3172 134.71 24.4759L134.332 23.5379ZM141.111 16.7899L141.503 16.5799C141.606 16.7292 141.685 16.9299 141.741 17.1819C141.807 17.4339 141.839 17.7372 141.839 18.0919C141.839 18.6146 141.732 19.0579 141.517 19.4219C141.303 19.7766 141.009 20.0799 140.635 20.3319C140.262 20.5839 139.837 20.8032 139.361 20.9899L139.417 20.8779C139.697 21.2046 140.01 21.5452 140.355 21.8999C140.71 22.2452 141.083 22.5906 141.475 22.9359C141.867 23.2719 142.264 23.5986 142.665 23.9159L141.909 24.6719C141.359 24.2146 140.841 23.7526 140.355 23.2859C139.87 22.8192 139.441 22.3806 139.067 21.9699C138.694 21.5592 138.4 21.2092 138.185 20.9199C137.98 20.6306 137.845 20.4019 137.779 20.2339C137.723 20.0659 137.695 19.9026 137.695 19.7439C137.695 19.6226 137.723 19.5059 137.779 19.3939C137.845 19.2819 137.943 19.1886 138.073 19.1139C138.204 19.0392 138.377 19.0019 138.591 19.0019C138.946 19.0019 139.235 19.1186 139.459 19.3519C139.683 19.5852 139.884 19.9026 140.061 20.3039L139.193 19.8139C139.725 19.6366 140.113 19.3939 140.355 19.0859C140.598 18.7686 140.719 18.3906 140.719 17.9519C140.719 17.6812 140.682 17.4152 140.607 17.1539C140.542 16.8832 140.458 16.6966 140.355 16.5939L140.985 16.7899H137.135V15.7959H148.349V16.7899H141.111ZM142.931 20.8359C142.642 20.5746 142.339 20.3599 142.021 20.1919C141.713 20.0146 141.298 19.9259 140.775 19.9259L140.649 18.9459C141.144 18.9459 141.573 19.0019 141.937 19.1139C142.311 19.2166 142.642 19.3659 142.931 19.5619V20.8359ZM144.107 22.2779C143.734 22.2779 143.398 22.1939 143.099 22.0259C142.81 21.8579 142.577 21.6292 142.399 21.3399C142.231 21.0412 142.147 20.6959 142.147 20.3039C142.147 19.9866 142.222 19.6832 142.371 19.3939C142.53 19.0952 142.763 18.8526 143.071 18.6659C143.389 18.4792 143.79 18.3859 144.275 18.3859C144.845 18.3859 145.344 18.5166 145.773 18.7779C146.212 19.0299 146.599 19.3752 146.935 19.8139C147.271 20.2432 147.57 20.7239 147.831 21.2559L146.949 21.7319C146.669 21.1906 146.389 20.7472 146.109 20.4019C145.829 20.0472 145.545 19.7812 145.255 19.6039C144.966 19.4266 144.649 19.3379 144.303 19.3379C143.902 19.3379 143.608 19.4406 143.421 19.6459C143.235 19.8419 143.141 20.0706 143.141 20.3319C143.141 20.6772 143.239 20.9246 143.435 21.0739C143.631 21.2139 143.865 21.2839 144.135 21.2839C144.275 21.2839 144.411 21.2746 144.541 21.2559C144.681 21.2279 144.831 21.1812 144.989 21.1159L145.325 22.0539C145.092 22.1472 144.873 22.2079 144.667 22.2359C144.462 22.2639 144.275 22.2779 144.107 22.2779Z" fill="#525252" />
                            <defs>
                                <linearGradient id="paint0_linear_223_519" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF4565" />
                                    <stop offset="1" stopColor="#D11233" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </Link>
                    { fontSearchChange ? 
                    <div id="search" className="bg-neutral-50 rounded-xl px-4 py-3.5 flex gap-x-3 items-center lg:w-1/2 mt-4 lg:mt-0 text-neutral-600">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.98567 15.6896C10.3118 15.6915 11.6085 15.3 12.712 14.565C13.8154 13.83 14.676 12.7844 15.1847 11.5605C15.6933 10.3365 15.8274 8.9893 15.5698 7.68921C15.3122 6.38915 14.6744 5.19466 13.7374 4.25689C12.8003 3.31912 11.606 2.68021 10.3055 2.421C9.00509 2.1618 7.65686 2.29394 6.43156 2.80071C5.20624 3.30748 4.15885 4.1661 3.42194 5.26795C2.68502 6.36979 2.29167 7.66533 2.29167 8.99063C2.29167 10.7658 2.99664 12.4684 4.25175 13.7244C5.50685 14.9805 7.20946 15.6873 8.98567 15.6896Z" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.7402 13.7426L17.7083 17.7084" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Input placeholder="Search fonts" type="search" value={fontSearch ? fontSearch : ''} onChange={fontSearchChange} customClass="w-full" />
                    </div>
                    : null
                    }
                </div>
                <div className="background absolute inset-0 -z-10 bg-white/80 backdrop-blur-md"></div>
            </div>
        </nav>
    )
}