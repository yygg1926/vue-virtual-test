<template>
    <div class="main-temp">
        <div class="top-title">
            <span>
                담당 고객 리스트
            </span>
            <button>
                숨김해제
            </button>
            <button>
                전체 조회
            </button>
        </div>
        <div class="cust-list">
            <table class="cust-list-table">
                <thead>
                    <th v-for="(item, index) in header" :key="index" >{{ item }}</th>
                </thead>
                <tbody>
                    <tr v-for="(line, idx) in list" :key="idx" >
                        <td v-for="(item, idx) in line" :key="idx" >{{ item }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="ntf">
            <div class="ntf-list">
                <div class="ntf-list-title">
                    <span>공지사항</span>
                    <router-link to="/registNtf">
                        <button>등록</button>
                    </router-link>
                    
                </div>
                <div class="ntf-list-content">
                    <table>
                        <thead>
                            <th v-for="item in ntfHeader" :key="item">{{ item }}</th>
                        </thead>
                        <tbody>
                            <tr v-for="(list, idx) in ntfList" :key="idx" class="ntf-list-item">
                                <td v-for="(item, index) in list" :key="index">
                                    <a href="#" v-if="(index == 2)" @click="showNtfDtl(idx)">
                                        {{ item }}
                                    </a>
                                    <span v-else>
                                        {{ item }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="ntf-dtl">
                <div class="ntf-dtl-title">
                    <span>공지사항 상세정보</span>
                    <button @click="updateNtfDtl">변경</button>
                </div>
                <div class="ntf-dtl-content">
                    <table :hidden="!dtlClick">
                        <thead>
                            <tr>
                                <td class="ntf-dtl-header">제목</td>
                                <td colspan="3">{{ this.title }}</td>
                            </tr>
                            <tr>
                                <td class="ntf-dtl-header">작성자</td>
                                <td>{{ this.author }}</td>
                                <td class="ntf-dtl-header">작성일자</td>
                                <td>{{ this.postDate }}</td>
                            </tr>
                            <tr>
                                <td class="ntf-dtl-header">공지게시일자</td>
                                <td>{{ this.openDate }}</td>
                                <td class="ntf-dtl-header">공지유형</td>
                                <td>{{ this.ntfType }}</td>
                            </tr>
                            <tr>
                                <td class="ntf-dtl-header">내용</td>
                                <td colspan="3">
                                    <textarea name="ntf-dtl-content" id="ntfCont" cols="30" rows="5" v-model="this.content">
                                    </textarea>
                                </td>
                            </tr>
                            <tr>
                                <td class="ntf-dtl-header">답변</td>
                                <td colspan="3">
                                    {{ this.comment }}
                                </td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            header: ["순서", "고객유형", "고객ID", "청구계정ID", "서비스계약ID", "서비스번호", "상품코드", "상품명", "계약상태"],
            list: [
                [1, '법인사업자', 'C0000001111', 'B0000001111', 'S0000001111', 'P7px9***', '2346', '코로케이션', '사용중'],
                [2, '법인사업자', 'C0000001111', 'B0000001111', 'S0000001111', 'P7px9***', '2346', '코로케이션', '일시정지'],
                [3, '법인사업자', 'C0000001111', 'B0000001111', 'S0000001111', 'P7px9***', '2346', '코로케이션', '일시정지'],
                [4, '법인사업자', 'C0000001111', 'B0000001111', 'S0000001111', 'P7px9***', '2346', '코로케이션', '사용중'],
            ],
            ntfHeader: ["순서", "공지유형", "제목", "공지게시시작일시", "공지게시종료일시", "작성자", "작성일자", "내용"],
            ntfList: [
                [1, '시스템공지', 'Customer Portal 사이트', '2022-07-25', '2022-07-31', 'SYSTEM', '2022-07-25 08:47:44', '안녕하세요. customer portal 사이트가 2022년 7월 25일 새로운 모습으로 오픈합니다. 감사합니다.'],
                [2, '시스템공지', 'ICBS 중단 및 샛별', '2022-07-25', '2022-07-31', 'SYSTEM', '2022-07-25 08:47:44', '안녕하세요. ICBS가 중단 됩니다. 감사합니다.'],
                [3, '도움말', '차세대 영업전산 메뉴', '2022-07-25', '2022-07-31', 'SYSTEM', '2022-07-25 08:47:44', '안녕하세요. 이제 곧 차세대 영업 전산메뉴로 리뉴얼될 예정입니다. 감사합니다.'],
            ],
            title: '',
            author: '',
            postDate: '',
            openDate: '',
            ntfType: '',
            content: '',
            comment: '',
            dtlClick: false,
            nowNtfNo: '',
        }
    },
    methods: {
        showNtfDtl(idx){
            console.log(this.ntfList[idx]);
            const target = this.ntfList[idx];
            this.title = target[2];
            this.author = target[5];
            this.postDate = target[6];
            this.openDate = target[3] + '~' + target[4];
            this.ntfType = target[1];
            this.content = target[7];
            this.comment = 'comment test';
            this.dtlClick = true;
            this.nowNtfNo = target[0];
        },
        updateNtfDtl(){
            if(this.dtlClick){
                if(confirm('변경하시겠습니까?')){
                    const target = this.ntfList[this.nowNtfNo-1];
                    target[7] = this.content;
                    alert('변경이 완료되었습니다');
                }
            }
        },
    },
}
</script>

<style scoped>
.main-temp{
    width: 95%;
    margin: 0 2.5% 0;
}
.top-title{
    padding: 20px 10px 10px;
}
.top-title span{
    float: left;
    font-weight: 700;
}
button{
    float: right;
    margin: 0 10px 0;
    background-color: #ffffff;
    border-radius: 5px;
}
.cust-list{
    text-align: -webkit-center;
    width: 100%;
}
table{
    border: 1px solid black;
    border-collapse: collapse;
    padding: 0;
    margin: 5% 0 5%;
    width: 100%;
}
th {
    background-color: lightgray;
}
th, td {
    border: 1px solid black;
}
.ntf {
    display: flex;
}
.ntf-list {
    /* display: flex; */
    width: 50%;
    margin: 0 5px 0;
}
.ntf-list .ntf-list-title, .ntf-dtl .ntf-dtl-title{
    display: flex;
    width: 100%;
    justify-content: space-between;
}
.ntf span {
    font-weight: 700;
    /* justify-content: flex-start; */
}
.ntf-list button {
    /* justify-content: flex-end; */
}
.ntf-dtl {
    width: 50%;
}
.ntf-dtl-header{
    background-color: lightgray;
}
.ntf-list-item td:last-child span{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
textarea{
    width: 95%;
}
.ntf-list-content{
    font-size: 10px;
}
</style>