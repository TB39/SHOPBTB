import { useState } from "react";
import type { FormEvent } from "react";

type ContactModalProps = {
  open: boolean;
  carName: string;
  onClose: () => void;
};

export default function ContactModal({ open, carName, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  if (!open) return null;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Đóng">×</button>
        <span className="modal-kicker">BTB SHOWROOM</span>
        <h2 id="contact-title">Đăng ký tư vấn xe</h2>
        <p>Để lại thông tin để showroom có thể liên hệ tư vấn. Đây hiện là biểu mẫu demo, chưa gửi dữ liệu lên máy chủ.</p>
        {sent ? (
          <div className="form-success">
            <span className="success-icon">✓</span>
            <strong>Đã ghi nhận thao tác demo</strong>
            <p>Cảm ơn {name}. Yêu cầu tư vấn mẫu {carName} đã được hiển thị thành công trên giao diện. Form chưa kết nối hệ thống nhận thông tin thực tế.</p>
            <button className="btn btn-blue" onClick={onClose}>Đóng</button>
          </div>
        ) : (
          <form onSubmit={submit} className="contact-form">
            <label>Họ và tên<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Nhập họ tên" /></label>
            <label>Số điện thoại<input required type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Nhập số điện thoại" /></label>
            <label>Mẫu xe quan tâm<input value={carName} readOnly /></label>
            <button type="submit" className="btn btn-blue">Gửi yêu cầu tư vấn <span>↗</span></button>
          </form>
        )}
      </section>
    </div>
  );
}