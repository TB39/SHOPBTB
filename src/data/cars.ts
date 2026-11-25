import type { Car } from "../types";

/*
  Danh sách mẫu xe tham khảo cho giao diện demo BTB SHOWROOM.
  Ảnh được chọn theo đúng tên dòng xe từ các trang hãng, đại lý hoặc
  nguồn ô tô có ghi nhận model. Ảnh có thể là đời xe / thị trường khác;
  vui lòng kiểm tra phiên bản thực tế trước khi đăng tin bán hàng.
*/
export const cars: Car[] = [
  {
    id: 1, brand: "Mercedes-Benz", name: "C-Class", category: "Sedan",
    image: "https://cdn.kienthuc.net.vn/images/cf739f51f3276a5be16e9cbb75eb6705eaa5f495423474418b77013e2524b7b6473d65ade37ee35e2842ee931d9ac0a4ad868a2090c0667b59ec199c8746406882e10c31da2a88f51a491a2da78a5f7533aa09b60d0d827a002908c5576a1c131e6b67b6d0170ce743afa6c2a18038e4/mercedes-benz-viet-nam-nang-cap-c-class-2025-tu-1599-ty-dong-Hinh-6.png",
    label: "Sedan hạng sang", description: "Thiết kế thanh lịch, phù hợp khách hàng yêu thích sự sang trọng và cảm giác lái cao cấp.",
    sourceUrl: "https://www.mercedes-benz.com.vn/vi/passengercars/models/saloon/c-class/overview.html"
  },
  {
    id: 2, brand: "Mercedes-Benz", name: "E-Class", category: "Sedan",
    image: "https://cafefcdn.com/203337114487263232/2026/4/24/e300-1777040484121-1777040484358452728599.png",
    label: "Sedan hạng sang", description: "Dòng sedan cỡ lớn hướng đến sự tiện nghi, êm ái và phong cách doanh nhân.",
    sourceUrl: "https://www.mercedes-benz.com.vn/vi/passengercars/models/saloon/e-class/overview.html"
  },
  {
    id: 3, brand: "Mercedes-Benz", name: "GLC", category: "SUV / Crossover",
    image: "https://cdn2.tuoitre.vn/thumb_w/730/471584752817336320/2025/6/13/glc-300-17498088387172036134456.png",
    label: "SUV hạng sang", description: "SUV Mercedes-Benz cân bằng giữa tiện nghi đô thị, không gian và phong cách sang trọng.",
    sourceUrl: "https://tuoitre.vn/mercedes-benz-glc-300-4matic-20250613172329581.htm"
  },
  {
    id: 4, brand: "Mercedes-Benz", name: "GLE", category: "SUV / Crossover",
    image: "https://media.ed.edmunds-media.com/mercedes-benz/gle-class/2025/oem/2025_mercedes-benz_gle-class_4dr-suv_gle-450-4matic_fq_oem_2_1600.jpg",
    label: "SUV hạng sang", description: "SUV cỡ lớn, chú trọng không gian cabin, tiện nghi và khả năng di chuyển đường dài.",
    sourceUrl: "https://www.edmunds.com/mercedes-benz/gle-class/"
  },
  {
    id: 5, brand: "BMW", name: "3 Series", category: "Sedan",
    image: "https://cdn.bmwblog.com/wp-content/uploads/2024/05/2025-bmw-3-series-facelift-14.jpg",
    label: "Sedan thể thao", description: "Sedan thể thao đặc trưng BMW với dáng vẻ năng động và hướng đến trải nghiệm lái.",
    sourceUrl: "https://www.bmwblog.com/2024/05/31/bmw-3-series-diesel-dead-uk/"
  },
  {
    id: 6, brand: "BMW", name: "5 Series", category: "Sedan",
    image: "https://imgcdn.oto.com/large/gallery/exterior/3/3051/bmw-5-series-sedan-2024-front-angle-low-view-357395.jpg",
    label: "Sedan hạng sang", description: "Dòng sedan cỡ trung cao cấp kết hợp sự thoải mái và phong cách hiện đại.",
    sourceUrl: "https://www.oto.com/mobil-baru/bmw/5-series-sedan"
  },
  {
    id: 7, brand: "BMW", name: "X3", category: "SUV / Crossover",
    image: "https://pictures.dealer.com/g/graysonbmw/1234/661c9656557f44b7bc3ec849b1d2193a.jpg",
    label: "SUV hạng sang", description: "SUV cỡ trung có thiết kế thể thao, phù hợp nhu cầu đi phố và du lịch gia đình.",
    sourceUrl: "https://www.graysonbmw.com/research/2026-bmw-x3-dimensions-specs.htm"
  },
  {
    id: 8, brand: "BMW", name: "X5", category: "SUV / Crossover",
    image: "https://media.ed.edmunds-media.com/bmw/x5/2025/oem/2025_bmw_x5_4dr-suv_xdrive40i_fq_oem_1_1600.jpg",
    label: "SUV hạng sang", description: "SUV BMW cỡ lớn với kiểu dáng mạnh mẽ và không gian tiện nghi.",
    sourceUrl: "https://www.edmunds.com/bmw/x5/2025/"
  },
  {
    id: 9, brand: "Audi", name: "A5", category: "Sedan",
    image: "https://nar-dam.audi.com/adobe/assets/urn%3Aaaid%3Aaem%3Abf19a9d8-006d-4558-82e5-2b3c6643a579/as/A5-1920x1080.jpg?auto=webp",
    label: "Sedan / Sportback", description: "Thiết kế Audi hiện đại, đường nét gọn gàng và đậm chất thể thao.",
    sourceUrl: "https://www.audibethesda.com/en/inventory/new/audi-a5-bethesda-md/"
  },
  {
    id: 10, brand: "Audi", name: "Q3", category: "SUV / Crossover",
    image: "https://img.autocarindia.com/Galleries/20250617014714_Audi_Q3_Front_Quarter_Static_1.jpg?q=75&w=728",
    label: "SUV đô thị hạng sang", description: "SUV cỡ nhỏ phù hợp di chuyển đô thị, với thiết kế đặc trưng của Audi.",
    sourceUrl: "https://www.autocarindia.com/auto-images/2025-audi-q3-image-gallery-435753"
  },
  {
    id: 11, brand: "Audi", name: "Q5", category: "SUV / Crossover",
    image: "https://media.zigcdn.com/media/model/2025/Mar/model-extimg-837601928_930x620.jpg",
    label: "SUV hạng sang", description: "SUV cỡ trung với thiết kế mạnh mẽ, tiện nghi cho gia đình.",
    sourceUrl: "https://www.zigwheels.com/audi-cars/q5-2026/pictures"
  },
  {
    id: 12, brand: "Lexus", name: "ES 300h", category: "Sedan",
    image: "https://media.ed.edmunds-media.com/lexus/es/2025/oem/2025_lexus_es_sedan_300h-f-sport-design_fq_oem_1_1600.jpg",
    label: "Sedan hybrid hạng sang", description: "Sedan thiên về sự êm ái, tinh tế và trải nghiệm thoải mái.",
    sourceUrl: "https://www.edmunds.com/lexus/es/2025/hybrid/"
  },
  {
    id: 13, brand: "Lexus", name: "NX 350h", category: "SUV / Crossover",
    image: "https://trademe.tmcdn.co.nz/photoserver/full/2288800410.jpg",
    label: "SUV hybrid hạng sang", description: "SUV Lexus cỡ trung với thiết kế sắc nét và tùy chọn hybrid.",
    sourceUrl: "https://www.trademe.co.nz/a/motors/cars/lexus/nx-350h/listing/5791119159"
  },
  {
    id: 14, brand: "Lexus", name: "RX 350h", category: "SUV / Crossover",
    image: "https://drive.gianhangvn.com/image/dau-xe-lexus-rx-350-luxury-hybrid-2734728j33388.jpg",
    label: "SUV hybrid hạng sang", description: "SUV cao cấp chú trọng thiết kế, không gian và sự thoải mái.",
    sourceUrl: "https://lexus.net.vn/lexus-rx-350h-luxury-1481949.html"
  },
  {
    id: 15, brand: "Toyota", name: "Vios", category: "Sedan",
    image: "https://static1.cafeland.vn/cafeauto/hinh-anh/2026/05/07/qH1lpmaM5miHkgmEQE7bI79eVxm1ElqU1ESc1PbW.png",
    label: "Phổ thông · Dễ tiếp cận", description: "Sedan phổ thông quen thuộc, phù hợp đi lại hằng ngày và gia đình nhỏ.",
    sourceUrl: "https://www.toyota.com.vn/vios-1-5g-cvt"
  },
  {
    id: 16, brand: "Toyota", name: "Camry", category: "Sedan",
    image: "https://imgcdn.zigwheels.vn/large/gallery/exterior/28/234/toyota-camry-front-angle-low-view-868823.jpg",
    label: "Sedan gia đình", description: "Sedan cỡ trung với không gian rộng và phong cách lịch lãm.",
    sourceUrl: "https://www.zigwheels.vn/en/new-cars/toyota/camry"
  },
  {
    id: 17, brand: "Toyota", name: "Yaris Cross", category: "SUV / Crossover",
    image: "https://baoquocte.vn/stores/news_dataimages/2026/022026/18/08/4547-toyota-yaris20260218081826.webp?rt=202603140912",
    label: "SUV đô thị", description: "SUV cỡ nhỏ phù hợp di chuyển trong thành phố và nhu cầu gia đình.",
    sourceUrl: "https://www.toyota.com.vn/yaris-cross"
  },
  {
    id: 18, brand: "Toyota", name: "Corolla Cross", category: "SUV / Crossover",
    image: "https://khpt.1cdn.vn/2026/01/20/toyota-corolla-cross-hev.jpg",
    label: "SUV gia đình", description: "SUV đô thị rộng rãi hơn, có lựa chọn động cơ xăng và hybrid tùy thị trường/phiên bản.",
    sourceUrl: "https://www.toyota.com.vn/tin-tuc/thong-tin-bo-tro/gia-xe-corolla-cross-gia-ban-gia-lan-banh-va-uu-dai-42927"
  },
  {
    id: 19, brand: "Toyota", name: "Innova Cross", category: "MPV 7 chỗ",
    image: "https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2026/03/29/1774775422674_img_982ca658.jpeg",
    label: "MPV gia đình", description: "Mẫu xe đa dụng cho gia đình cần không gian rộng và tính linh hoạt.",
    sourceUrl: "https://www.vietnam.vn/en/toyota-innova-cross-2026-chi-tiet-gia-lan-banh-va-thong-so-ky-thuat-moi-nhat-thang-3"
  },
  {
    id: 20, brand: "Toyota", name: "Fortuner", category: "SUV 7 chỗ",
    image: "https://imgcdn.zigwheels.vn/large/gallery/exterior/28/231/toyota-fortuner-front-side-view-735651.jpg",
    label: "SUV 7 chỗ", description: "SUV khung gầm cao hướng đến gia đình đông người và những chuyến đi xa.",
    sourceUrl: "https://www.zigwheels.vn/en/new-cars/toyota/fortuner"
  },
  {
    id: 21, brand: "Honda", name: "City", category: "Sedan",
    image: "https://bna.1cdn.vn/2026/04/04/img_71b036da.jpg",
    label: "Sedan phổ thông", description: "Sedan cỡ nhỏ gọn, phù hợp đi phố và sử dụng hằng ngày.",
    sourceUrl: "https://www.honda.com.vn/o-to/su-kien/honda-viet-nam-chinh-thuc-ra-mat-honda-city-moi-dien-mao-the-thao-di-cung-trang-bi-tien-ich-hien-dai-chat-the-thao-net-ca-tinh"
  },
  {
    id: 22, brand: "Honda", name: "Civic", category: "Sedan",
    image: "https://static.chotot.com/storage/chotot-kinhnghiem/xe/2026/04/826603f2-review-xe-honda-civic.webp",
    label: "Sedan thể thao", description: "Sedan mang phong cách thể thao, phù hợp người thích cảm giác lái năng động.",
    sourceUrl: "https://xe.chotot.com/kinh-nghiem/review-xe-honda-civic.html"
  },
  {
    id: 23, brand: "Honda", name: "HR-V", category: "SUV / Crossover",
    image: "https://cdn.dailyxe.com.vn/image/honda-hrv-g-300631j.jpg",
    label: "SUV đô thị", description: "SUV cỡ nhỏ với kiểu dáng linh hoạt cho nhu cầu di chuyển hằng ngày.",
    sourceUrl: "https://dailyxe.com.vn/xe-oto/honda-hrv-g-857e.html"
  },
  {
    id: 24, brand: "Honda", name: "CR-V", category: "SUV / Crossover",
    image: "https://static4.kenhtinxe.com/News/Img/17112025/xehay-crv-hev-l-171125-1jpg.jpg",
    label: "SUV gia đình", description: "SUV gia đình phổ biến, có cấu hình chỗ ngồi và hệ truyền động tùy phiên bản.",
    sourceUrl: "https://kenhtinxe.com/xe-moi/oto-moi/honda-cr-v-ehev-2026-tai-viet-nam-se-co-them-phien-ban-l-gia-mem-hon/72415"
  },
  {
    id: 25, brand: "Mazda", name: "Mazda3", category: "Sedan",
    image: "https://cdn.dailyxe.com.vn/image/mazda3-07-338887j.jpg",
    label: "Sedan / Hatchback", description: "Thiết kế thanh lịch, nội thất hướng đến trải nghiệm hiện đại.",
    sourceUrl: "https://dailyxe.com.vn/xe-oto/mazda-3-luxury-89e.html"
  },
  {
    id: 26, brand: "Mazda", name: "CX-5", category: "SUV / Crossover",
    image: "https://cdn.kienthuc.net.vn/images/43b54213f417a734df7abfbb0783ad3a4f6b1c61fe945d5e83a4a025f3d7bc84f67de203805d6488b4d1f280ee6b70699e6e282d4dbce15807e8ed2360d03817/2-8276.jpg.webp",
    label: "SUV gia đình", description: "SUV cỡ trung được nhiều gia đình quan tâm nhờ thiết kế và tính đa dụng.",
    sourceUrl: "https://kienthuc.net.vn/can-canh-mazda-cx-5-2026-tai-viet-nam-du-kien-hon-1-ty-dong-post1591455.html"
  },
  {
    id: 27, brand: "Mazda", name: "CX-8", category: "SUV 7 chỗ",
    image: "https://cdn1.otosaigon.com/data-cdn/attachments/3244/3244587-ca635e19936b6a5a12221dc63ec51925.jpg",
    label: "SUV 7 chỗ", description: "SUV ba hàng ghế, phù hợp gia đình cần thêm không gian hành khách.",
    sourceUrl: "https://www.otosaigon.com/threads/mazda-cx-8-2025-am-tham-ra-mat-tai-vn-con-3-phien-ban-gia-tang-tu-969-trieu-dong.10028001/"
  },
  {
    id: 28, brand: "Kia", name: "Sonet", category: "SUV / Crossover",
    image: "https://imgcdn.zigwheels.vn/large/gallery/exterior/12/1065/kia-sonet-front-angle-low-view-645360.jpg",
    label: "SUV đô thị", description: "SUV cỡ nhỏ, kiểu dáng trẻ trung và phù hợp đi lại trong thành phố.",
    sourceUrl: "https://www.zigwheels.vn/en/new-cars/kia/sonet/images"
  },
  {
    id: 29, brand: "Kia", name: "Seltos", category: "SUV / Crossover",
    image: "https://imgcdn.zigwheels.vn/large/gallery/exterior/12/977/kia-seltos-front-angle-low-view-470525.jpg",
    label: "SUV đô thị", description: "SUV cỡ nhỏ/cỡ B với phong cách hiện đại và không gian linh hoạt.",
    sourceUrl: "https://www.zigwheels.vn/en/new-cars/kia/seltos"
  },
  {
    id: 30, brand: "Kia", name: "Sportage", category: "SUV / Crossover",
    image: "https://cdnphoto.dantri.com.vn/U7Zn81o_KE6LD9v_Zxs2QlMUIp0%3D/thumb_w/1360/2026/06/07/dscf9074-1780788327130.jpg?watermark=v1",
    label: "SUV gia đình", description: "SUV cỡ trung với dáng vẻ khỏe khoắn và nhiều cấu hình trang bị.",
    sourceUrl: "https://dantri.com.vn/o-to-xe-may/kia-sportage-2026-ra-mat-viet-nam-voi-3-ban-hev-chua-co-gia-ban-20260607064834156.htm"
  },
  {
    id: 31, brand: "Kia", name: "Carnival", category: "MPV 7 chỗ",
    image: "https://kia-hochiminh.com.vn/storage/2024/09/Copy-of-Canival-Signature-17-1024x587.jpg",
    label: "MPV gia đình cao cấp", description: "MPV rộng rãi, phù hợp gia đình đông người và nhu cầu đưa đón.",
    sourceUrl: "https://kia-hochiminh.com.vn/xe/kia-carnival-new-carnival/"
  },
  {
    id: 32, brand: "Hyundai", name: "Accent", category: "Sedan",
    image: "https://cdn.gianhangvn.com/image/hyundai-accent-2026-ban-cao-cap-bai-viet-8-21zpv9u.jpg",
    label: "Sedan phổ thông", description: "Sedan hạng nhỏ, hướng đến nhu cầu đi lại hàng ngày và chi phí hợp lý.",
    sourceUrl: "https://gianhangvn.com/hyundai-accent-1-5l-at-dac-biet-1457881.html"
  },
  {
    id: 33, brand: "Hyundai", name: "Creta", category: "SUV / Crossover",
    image: "https://huyndaidongdo.com.vn/Uploads/News/post/images/19052025085620_hyundai-creta-53.jpg",
    label: "SUV đô thị", description: "SUV cỡ nhỏ phù hợp khách hàng cần gầm cao và kích thước linh hoạt.",
    sourceUrl: "https://huyndaidongdo.com.vn/hyundai-creta-2026-tong-chi-phi-lan-banh-moi-nhat-b44.php"
  },
  {
    id: 34, brand: "Hyundai", name: "Tucson", category: "SUV / Crossover",
    image: "https://imgcdn.zigwheels.vn/large/gallery/exterior/10/77/hyundai-tucson-front-angle-low-view-450839.jpg",
    label: "SUV gia đình", description: "SUV cỡ trung dành cho gia đình, kết hợp không gian và phong cách hiện đại.",
    sourceUrl: "https://hyundaivinh3s.com.vn/san-pham/hyundai-tucson-new-2026/"
  },
  {
    id: 35, brand: "Hyundai", name: "Santa Fe", category: "SUV 7 chỗ",
    image: "https://s.bonbanh.com/news/images/oto/hyundai/santafe/2025/hyundai-santafe-2025-trang.JPG",
    label: "SUV 7 chỗ", description: "SUV ba hàng ghế dành cho gia đình cần không gian và tiện nghi.",
    sourceUrl: "https://bonbanh.com/oto/hyundai/santafe-gia-duoi-915000000-trieu"
  },
  {
    id: 36, brand: "Ford", name: "Territory", category: "SUV / Crossover",
    image: "https://httv.1cdn.vn/2026/03/26/img_6171dc12.jpg",
    label: "SUV gia đình", description: "SUV đô thị cỡ trung với kiểu dáng hiện đại và khoang cabin rộng.",
    sourceUrl: "https://baohatinh.vn/tv/gia-xe-ford-territory-2026-va-danh-gia-chi-tiet-suv-hang-c-day-cong-nghe-35448.html"
  },
  {
    id: 37, brand: "Ford", name: "Everest", category: "SUV 7 chỗ",
    image: "https://cdn2.tuoitre.vn/thumb_w/750/471584752817336320/2026/5/8/ford1-1778228387846833709301-16-0-829-1300-crop-17782283966842061078105.png",
    label: "SUV 7 chỗ", description: "SUV cỡ lớn với ba hàng ghế, phù hợp gia đình và hành trình dài.",
    sourceUrl: "https://news.tuoitre.vn/ford-debuts-2026-everest-line-up-in-vietnam-103260508153121146.htm"
  },
  {
    id: 38, brand: "Ford", name: "Ranger Wildtrak", category: "Bán tải",
    image: "https://model-file.car360.info/content_imges/ee2ff2b9514cd9c43b26008f1b7a553d.jpg",
    label: "Bán tải đa dụng", description: "Bán tải phục vụ công việc, đi đường dài và nhu cầu sử dụng đa mục đích.",
    sourceUrl: "https://car360.vn/articles/1691249"
  },
  {
    id: 39, brand: "Mitsubishi", name: "Xpander", category: "MPV 7 chỗ",
    image: "https://mitsubishibinhthuan.com.vn/gw-content/images/1-zRB4L.jpeg",
    label: "MPV gia đình", description: "MPV 7 chỗ hướng đến gia đình, nhóm bạn và nhu cầu di chuyển linh hoạt.",
    sourceUrl: "https://mitsubishibinhthuan.com.vn/xpander"
  },
];