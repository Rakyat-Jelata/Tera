import Link from "next/link";

const plans = [
  {
    name: "Kaveling",
    price: "Rp99.000",
    period: "/bulan",
    color: "border-slate-200",
    button: "bg-slate-800 hover:bg-slate-900",
    recommended: false,
    features: [
      "5 Listing Aktif",
      "Upload 15 Foto",
      "Support Email",
      "Statistik Listing",
      "Basic Search Exposure",
    ],
  },
  {
    name: "Cluster",
    price: "Rp299.000",
    period: "/bulan",
    color: "border-cyan-500 ring-4 ring-cyan-100",
    button: "bg-cyan-600 hover:bg-cyan-700",
    recommended: true,
    features: [
      "30 Listing Aktif",
      "50x AI Description",
      "Auto Boost Listing",
      "Prioritas Pencarian",
      "Support WhatsApp",
    ],
  },
  {
    name: "Residence",
    price: "Rp899.000",
    period: "/bulan",
    color: "border-indigo-500",
    button: "bg-indigo-600 hover:bg-indigo-700",
    recommended: false,
    features: [
      "100 Listing Aktif",
      "Unlimited AI",
      "Auto Boost Harian",
      "Featured Listing",
      "Slot Iklan Sosial Media",
    ],
  },
  {
    name: "Estate VIP",
    price: "Rp2.499.000",
    period: "/bulan",
    color: "border-yellow-500",
    button: "bg-yellow-500 hover:bg-yellow-600",
    recommended: false,
    features: [
      "Unlimited Listing",
      "Unlimited AI",
      "Multi Akun Agen",
      "Priority Support",
      "3 Slot Promosi Sosial Media",
    ],
  },
];

export default function Membership() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Membership TERAVIA
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Pilih Paket Sesuai Kebutuhan Anda
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Tingkatkan peluang properti Anda terjual lebih cepat
            dengan fitur premium TERAVIA.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-4">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`relative rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl ${plan.color}`}
            >

              {plan.recommended && (

                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold text-white">
                  Paling Populer
                </span>

              )}

              <h3 className="text-2xl font-bold text-slate-900">
                {plan.name}
              </h3>

              <div className="mt-6">

                <span className="text-4xl font-extrabold text-cyan-600">
                  {plan.price}
                </span>

                <span className="text-slate-500">
                  {plan.period}
                </span>

              </div>

              <ul className="mt-8 space-y-4">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <span className="text-green-600">
                      ✔
                    </span>

                    {feature}

                  </li>

                ))}

              </ul>

              <Link
                href="/membership"
                className={`mt-10 block rounded-xl py-4 text-center font-semibold text-white transition ${plan.button}`}
              >
                Pilih Paket
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
                  }
