# Kullanıcıdan Gelen Verilerle Ortalama Hesaplama

---

## Proje Amacı
Kullanıcıdan alınan sayıların bir listesini oluşturmak, bu sayıların toplamını ve ortalamasını hesaplayarak sonucu göstermek. Girdi işlemi kullanıcı tarafından durdurulana kadar devam eder. Proje, **fonksiyon** kullanılarak modüler bir yapı oluşturmayı hedefler.

---

## Kullanılacak Değişkenler ve Anahtar Kelimeler

### Değişkenler:
- **`sayiListesi`**: Kullanıcının girdiği tüm sayıları saklayacak bir dizi.
- **`toplam`**: Girdi olarak alınan sayıların toplamını tutan değişken.
- **`ortalama`**: Hesaplanan ortalama değerini tutacak değişken.
- **`girdi`**: Kullanıcıdan alınan her bir sayı veya durdurma komutu.

### Anahtar Kelimeler:
- **`function`**: İşlemleri gerçekleştirmek için bir fonksiyon tanımlamak.
- **`let`**: Değişken tanımlamak için.
- **`const`**: Sabit değişken tanımlamak için.
- **`while`**: Döngüyü kullanıcı girişine bağlı çalıştırmak.
- **`break`**: Döngüyü sonlandırmak için.
- **`push()`**: Dizilere eleman eklemek için.
- **`parseFloat()`**: String bir veriyi ondalıklı sayıya dönüştürmek için.
- **`isNaN()`**: Bir değerin geçerli bir sayı olup olmadığını kontrol etmek.
- **`return`**: Bir fonksiyondan değer döndürmek.

---

## İzlenecek Adımlar

1. **Fonksiyon Tanımlama:**
   - Sayı toplama ve ortalama hesaplama işlemini gerçekleştiren bir fonksiyon oluşturun. Bu fonksiyon, kullanıcıdan gelen sayıları alıp işleyerek bir sonuç döndürmelidir.

2. **Boş Bir Dizi Oluşturma:**
   - Kullanıcının girdiği tüm sayıları saklamak için bir dizi tanımlayın.

3. **Kullanıcı Girişi Döngüsü:**
   - Kullanıcıdan girdi almayı sağlayacak bir döngü tanımlayın.
   - Kullanıcıdan her girişte bir sayı isteyin. Kullanıcı durdurma komutunu girene kadar döngü devam etsin.

4. **Geçersiz Girdiler İçin Kontrol:**
   - Kullanıcının girdiği değerin geçerli bir sayı olup olmadığını kontrol edin.
   - Eğer geçersiz bir giriş yapılırsa kullanıcıyı bilgilendirip yeniden giriş yapmasını sağlayın.

5. **Girilen Sayıları Diziye Ekleme:**
   - Geçerli olan her sayı diziye eklenmeli.

6. **Döngüyü Durdurma:**
   - Kullanıcı durdurma komutunu (örneğin `q`) girdiğinde döngüyü sonlandırın.

7. **Toplam Hesaplama:**
   - Dizi içerisindeki tüm sayıları toplayarak toplam değerini bulun.

8. **Ortalama Hesaplama:**
   - Hesaplanan toplamı, dizideki eleman sayısına bölerek ortalamayı bulun.

9. **Sonucu Döndürme:**
   - Fonksiyon, hesaplanan ortalamayı geri döndürmelidir.

10. **Sonucu Gösterme:**
    - Kullanıcıya, girilen sayıların ortalamasını ekranda gösterin.
