import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Paper from "@mui/material/Paper";

interface Work {
  title: string;
  description: string;
  bulletPoints: string[];
  persional: boolean;
}
const WORKS: Work[] = [
  {
    title:
      "分析機器を利用するユーザーの測定結果などのデータを一元管理し、データの活用を支援するシステムの設計及び開発",
    description: "",
    bulletPoints: [
      "ユーザーがデータをアップロード及び解析処理できるシステムの仕様設計、アーキテクチャ設計、バックエンド作成など",
      ".NET Core関連フレームワーク及びPostgreSQLによるバックエンドの開発",
      "ドメイン駆動設計(DDD)に基づいたバックエンドの設計、実装",
      "RESTFul APIの設計",
      "Redisを用いたシングルサインオン仕組みを設計",
      "Reactによる仕様デモ作成",
      "クライアントサイド(Windowsソフトウェア)の処理部分の設計、実装",
    ],
    persional: false,
  },
  {
    title:
      "ペットに関するソーシャルアプリのサーバーサイドとクライアントサイドを設計・実装・デザイン",
    description: "",
    bulletPoints: [
      "ユーザーが投稿、コメント、いいね、フォローなどができるソーシャルメディアアプリを作成",
      "Spring Bootとドメイン駆動設計によりバックエンドを開発",
      "Spring Data JPAを用いてデータベースアクセス層を開発",
      "React Nativeを用いてクライアント側を開発",
      "React, React Reduxで管理者サイドを作成",
      "UI/UXを設計",
    ],
    persional: true,
  },

  {
    title: "社内データ基盤システムの開発及び測定データ管理システムの開発",
    description: "",
    bulletPoints: [
      "ユーザーがデータをアップロード、閲覧できるシステムのフロントエンドとバックエンドの開発",
      ".NET Core関連フレームワークPostgreSQLによるバックエンドの開発",
      "Reactによるフロントエンドの開発",
      "ミドルウェアによる例外処理の提案、設計",
    ],
    persional: false,
  },

  {
    title: "細胞画像の関連ソフトウェアの開発・保守メンテナンス",
    description: "",
    bulletPoints: [
      "重たい処理をマルチスレッドによる速度向上",
      "メモリリークバグをGC関連ツールで修正",
      "同時処理におけるバグの修正",
      "既存のWindowsソフトウェアの機能追加",
    ],
    persional: false,
  },
];

const WorkItem = ({ work }: { work: Work }) => {
  const { title, description, bulletPoints } = { ...work };
  return (
    <Paper elevation={0} style={{ textAlign: "left" }}>
      <Typography variant="subtitle2" component="span">
        {title}
      </Typography>

      <Typography>{description}</Typography>

      <ul>
        {bulletPoints.map((item) => (
          <li key={item}>
            <Typography variant="body2">{item}</Typography>
          </li>
        ))}
      </ul>
    </Paper>
  );
};

export default function Works() {
  return (
    <div id="works" style={{ padding: 80, backgroundColor: "#ffffff" }}>
      <div style={{ paddingLeft: 100, paddingRight: 100, marginBottom: 60 }}>
        <Typography
          style={{
            fontSize: 34,
            fontWeight: "bold",
            color: "#333333",
            textAlign: "center",
            marginBottom: 80,
          }}
          variant="h2"
          gutterBottom
        >
          Works
        </Typography>
      </div>

      <div>
        <Timeline position="alternate">
          {WORKS.map((item) => (
            <TimelineItem key={item.title}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <WorkItem work={item} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
