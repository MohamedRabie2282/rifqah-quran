# رِفقة القرآن

منصة تحفيظ القرآن: لوحة طالب تفاعلية، API بنظام صلاحيات، إشعارات لحظية وبريدية، تقارير، وشهادات PDF.

## التشغيل المحلي

1. شغّل MongoDB محليًا أو أنشئ قاعدة في MongoDB Atlas.
2. انسخ `server/.env.example` إلى `server/.env` واضبط `MONGODB_URI`.
3. نفّذ `npm install` ثم `npm run seed --workspace server` لإضافة السور الـ114 والحسابات التجريبية.
4. شغّل `npm run dev`. الواجهة: `http://localhost:5173`، والـ API: `http://localhost:4000`.

## النشر

- Frontend: انشر مجلد `client` على Vercel واضبط أمر البناء `npm run build` ومجلد النشر `dist`.
- Backend: انشر مجلد `server` على Render/Railway، وضع متغيرات `.env` واربط MongoDB Atlas.
- اجعل `CLIENT_URL` عنوان Vercel، و`MONGODB_URI` رابط MongoDB، واضبط SMTP لدى مزود بريد فعلي.
- اجعل التخزين الدائم للشهادات S3/Cloudinary في الإنتاج بدل المجلد المحلي، وأضف Firebase Admin لإرسال Push notifications إلى تطبيق الموبايل.
