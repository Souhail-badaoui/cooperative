import { useCommandesStore } from "../store/OrderList";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function OrderCard() {
  const { commandes } = useCommandesStore();

  // 📈 الإحصائيات
  const totalCommandes = commandes.length;
  const enCours = commandes.filter((c) => c.statut === "En cours").length;
  const terminees = commandes.filter((c) => c.statut === "Terminée").length;
  const totalVentes = commandes.reduce((acc, c) => acc + c.total, 0);

  // ⏱️ chart: نولد بيانات بسيطة من الطلبات
  const dataChart = commandes.map((c, index) => ({
    name: `Cmd ${index + 1}`,
    ventes: c.total,
  }));

  return (
    <div className="dashboard" style={{ padding: "40px", color: "#fff" }}>
      <h2 style={{ marginBottom: "30px" }}>📊 Tableau de Bord</h2>

      {/* 🧩 Cards ديال الإحصائيات */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginBottom: "50px"
      }}>
        <div style={cardStyle}>
          <h3>Total Commandes</h3>
          <p style={valueStyle}>{totalCommandes}</p>
        </div>
        <div style={cardStyle}>
          <h3>En Cours</h3>
          <p style={valueStyle}>{enCours}</p>
        </div>
        <div style={cardStyle}>
          <h3>Terminées</h3>
          <p style={valueStyle}>{terminees}</p>
        </div>
        <div style={cardStyle}>
          <h3>Total Ventes</h3>
          <p style={valueStyle}>{totalVentes} DH</p>
        </div>
      </div>

      {/* 📉 Chart ديال المبيعات */}
      <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
        <h3 style={{ marginBottom: "20px" }}>Évolution des ventes</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dataChart}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line type="monotone" dataKey="ventes" stroke="#00bcd4" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#1e293b",
  borderRadius: "12px",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
};

const valueStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginTop: "10px",
  color: "#00bcd4"
};
